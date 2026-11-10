# SmartGov AI

SmartGov AI is a Public Service Failure Early Warning System leveraging Artificial Intelligence and IoT to predict failures in public services (Electricity, Water, Waste) before they happen.

## Features
- **IoT Integration**: Code to run on ESP32 to collect real-time data on voltage, water pressure, waste levels, etc.
- **Machine Learning**: Predictive models to determine the probability of failure based on historical and real-time sensor data.
- **Backend API**: A complete FastAPI backend for ingesting data, running predictions, and serving dashboards.
- **Mobile/Web App**: A unified Flutter frontend application that features multiple dashboards (Super Admin, Departments, Citizens) for tracking risks, complaints, and alerts.

## Project Structure
- `lib/main.dart`: The Flutter application serving as the UI.
- `backend/`: FastAPI application handling logic and REST APIs.
- `database/`: Schema designs.
- `ml/`: Scripts to train Machine Learning models.
- `esp32/`: Firmware code for IoT nodes.

## How to Run

### Frontend (Flutter)
1. Ensure you have Flutter installed.
2. Run `flutter run` in the root directory.

### Backend (Python / FastAPI)
1. `cd backend`
2. `pip install -r requirements.txt`
3. `uvicorn app:app --reload`

### Database
1. Import `database/smartgov.sql` into a MySQL database.

## CouldAI
This app was built with [CouldAI](https://could.ai), an AI app builder for cross-platform apps that turns prompts into real native iOS, Android, Web, and Desktop apps with autonomous AI agents that architect, build, test, deploy, and iterate production-ready applications.