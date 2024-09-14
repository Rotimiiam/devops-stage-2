# Use an official Python 3.10 runtime as a parent image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y curl

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to PATH (fix for Poetry not being found)
ENV PATH="/root/.local/bin:$PATH"

# Copy the pyproject.toml and poetry.lock files to install dependencies first
COPY pyproject.toml poetry.lock* /app/

# Install Python dependencies using Poetry
RUN poetry install --no-root

# Copy the rest of the backend code to the container
COPY . /app

# Expose port 8000 (FastAPI default)
EXPOSE 8000

# Command to start the FastAPI application inside the container
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
