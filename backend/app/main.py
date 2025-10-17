from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import os
import gdown
import threading

# Google Drive file URLs
MODEL_FILE_URL = "https://drive.google.com/uc?id=16Rx_6_ksbbkQKeMNmj3IWgDKj30mN8Kq"
FEATURE_ENCODERS_FILE_URL = "https://drive.google.com/uc?id=1AGiE9jVKAUg-fBSzvq-O9gf98GgrWb9G"
TARGET_ENCODER_FILE_URL = "https://drive.google.com/uc?id=16wACbrRn1Rg3YWwCbhPBS3zk7nR1x-He"

# Local paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "travel_rf_model.joblib")
FEATURE_ENCODERS_PATH = os.path.join(BASE_DIR, "travel_label_encoders.joblib")
TARGET_ENCODER_PATH = os.path.join(BASE_DIR, "travel_target_encoder.joblib")

# Download files if they don't exist
def download_file(url: str, dest_path: str):
    if not os.path.exists(dest_path):
        print(f"Downloading {os.path.basename(dest_path)}...")
        gdown.download(url, dest_path, quiet=False)
    else:
        print(f"{os.path.basename(dest_path)} already exists.")

# Download in a separate thread to not block startup
download_thread = threading.Thread(target=lambda: (
    download_file(MODEL_FILE_URL, MODEL_PATH),
    download_file(FEATURE_ENCODERS_FILE_URL, FEATURE_ENCODERS_PATH),
    download_file(TARGET_ENCODER_FILE_URL, TARGET_ENCODER_PATH)
))
download_thread.start()
download_thread.join()

# Lazy loading globals
model = None
feature_encoders = None
target_encoder = None

def load_resources():
    """Load model and encoders only once"""
    global model, feature_encoders, target_encoder
    if model is None:
        print("Loading model and encoders into memory...")
        model = joblib.load(MODEL_PATH)
        feature_encoders = joblib.load(FEATURE_ENCODERS_PATH)
        target_encoder = joblib.load(TARGET_ENCODER_PATH)
        print("Model and encoders loaded.")

# Initialize FastAPI
app = FastAPI(title="Travel Destination Recommender")

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input schema
class TravelInput(BaseModel):
    Budget: str
    Climate: str
    Duration: int
    Activity: str
    Season: str
    Region: str

# Health check endpoint
@app.get("/")
def root():
    return {"message": "Travel Destination Recommender API is running!"}

# Prediction endpoint
@app.post("/predict")
def predict_destination(data: TravelInput):
    # Ensure model and encoders are loaded
    load_resources()

    df = pd.DataFrame([data.dict()])

    # Encode features
    for col, le in feature_encoders.items():
        if col in df.columns:
            try:
                df[col] = le.transform(df[col])
            except ValueError:
                df[col] = -1

    # Predict
    pred_encoded = model.predict(df)[0]
    destination = target_encoder.inverse_transform([pred_encoded])[0]

    return {"recommended_destination": destination}

# Run server for Render
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
