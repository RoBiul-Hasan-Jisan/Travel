
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "..", "travel_rf_model.joblib")
FEATURE_ENCODERS_PATH = os.path.join(BASE_DIR, "..", "travel_label_encoders.joblib")
TARGET_ENCODER_PATH = os.path.join(BASE_DIR, "..", "travel_target_encoder.joblib")


def load_model():
    return joblib.load(MODEL_PATH)

def load_feature_encoders():
    return joblib.load(FEATURE_ENCODERS_PATH)

def load_target_encoder():
    return joblib.load(TARGET_ENCODER_PATH)

model = load_model()
feature_encoders = load_feature_encoders()
target_encoder = load_target_encoder()


app = FastAPI(title="Travel Destination Recommender")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TravelInput(BaseModel):
    Budget: str
    Climate: str
    Duration: int
    Activity: str
    Season: str
    Region: str

@app.get("/")
def root():
    return {"message": "Travel Destination Recommender API is running!"}

@app.post("/predict")
def predict_destination(data: TravelInput):
    df = pd.DataFrame([data.dict()])

   
    for col, le in feature_encoders.items():
        if col in df.columns:
            try:
                df[col] = le.transform(df[col])
            except ValueError:
                
                df[col] = -1

  
    pred_encoded = model.predict(df)[0]

    destination = target_encoder.inverse_transform([pred_encoded])[0]

    return {"recommended_destination": destination}
