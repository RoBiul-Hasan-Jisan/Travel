# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app


COPY backend/app ./app
COPY backend/requirements.txt ./requirements.txt


RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gdown  # for downloading models from Google Drive


EXPOSE 8000


CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
