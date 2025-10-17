# Use official Python slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

# Copy only requirements first (better caching)
COPY requirements.txt .

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the project
COPY . .

# Expose FastAPI port
EXPOSE 8000

# Run the FastAPI app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
