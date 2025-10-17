import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib


data_path = 'data/data.csv'  
df = pd.read_csv(data_path)


X = df[['Budget', 'Climate', 'Duration', 'Activity', 'Season', 'Region']].copy()
y = df['Destination'].copy()


feature_encoders = {}
for col in X.columns:
    le = LabelEncoder()
    X.loc[:, col] = le.fit_transform(X[col])
    feature_encoders[col] = le


target_encoder = LabelEncoder()
y_encoded = target_encoder.fit_transform(y)

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42
)


model = RandomForestClassifier(
    n_estimators=500, random_state=42, n_jobs=-1
)
model.fit(X_train, y_train)


acc = model.score(X_test, y_test)
print(f"Model Accuracy (single-class): {acc*100:.2f}%")


probs = model.predict_proba(X_test)
top3_preds = np.argsort(probs, axis=1)[:, -3:]
top3_correct = sum([y_test[i] in top3_preds[i] for i in range(len(y_test))])
top3_accuracy = top3_correct / len(y_test)
print(f"Top-3 Accuracy: {top3_accuracy*100:.2f}%")


joblib.dump(model, '../travel_rf_model.joblib')
joblib.dump(feature_encoders, '../travel_label_encoders.joblib')
joblib.dump(target_encoder, '../travel_target_encoder.joblib')
print("Model and encoders saved successfully!")
