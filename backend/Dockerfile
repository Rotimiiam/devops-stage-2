# Use an official Python 3.10 runtime as a parent image
FROM python:3.10-slim

# Set environment variables for Poetry
ENV POETRY_VERSION=1.8.3 \
    POETRY_HOME="/opt/poetry" \
    POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_CREATE=false

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies and upgrade pip
RUN apt-get update && apt-get install -y curl build-essential && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Ensure Poetry is available in the PATH
ENV PATH="/opt/poetry/bin:$PATH"

# Copy the pyproject.toml and poetry.lock files to install dependencies first
COPY pyproject.toml poetry.lock* /app/

# Install Python dependencies using Poetry (without creating virtualenv)
RUN /opt/poetry/bin/poetry install --no-root

# Copy the rest of the backend code to the container
COPY . /app

# Expose port 8000 (FastAPI default)
EXPOSE 8000

# Command to start the FastAPI application inside the container
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
