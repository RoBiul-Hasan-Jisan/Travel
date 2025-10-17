# Use official Python slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

# Copy only requirements first (better caching)
COPY requirements.txt .

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the project
COPY . .

# Download models from Google Drive at build time
RUN python -c "import gdown; gdown.download('https://drive.google.com/uc?id=16Rx_6_ksbbkQKeMNmj3IWgDKj30mN8Kq', 'travel_rf_model.joblib', quiet=False)"
RUN python -c "import gdown; gdown.download('https://drive.google.com/uc?id=1AGiE9jVKAUg-fBSzvq-O9gf98GgrWb9G', 'travel_label_encoders.joblib', quiet=False)"
RUN python -c "import gdown; gdown.download('https://drive.google.com/uc?id=16wACbrRn1Rg3YWwCbhPBS3zk7nR1x-He', 'travel_target_encoder.joblib', quiet=False)"

# Expose FastAPI port
EXPOSE 8000

# Run the app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
