import joblib
import numpy as np

def load_model():
    """Load the trained RandomForest model."""
    return joblib.load("travel_rf_model.joblib")

def load_feature_encoders():
    """Load the feature LabelEncoders."""
    encoders = joblib.load("travel_label_encoders.joblib")
    return encoders

def load_target_encoder():
    """Load the target LabelEncoder."""
    return joblib.load("travel_target_encoder.joblib")

def safe_transform(encoder, values):
    """
    Transform values using LabelEncoder.
    If a value is unseen, assign a default code (-1).
    """
    transformed = []
    for val in values:
        try:
            transformed.append(encoder.transform([val])[0])
        except ValueError:
           
            transformed.append(-1)
    return np.array(transformed)
