import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib
import os

# Create ml directory if not exists
os.makedirs('ml/models', exist_ok=True)
os.makedirs('ml/data', exist_ok=True)

def generate_sample_data(department, n_samples=1000):
    np.random.seed(42)
    if department == 'electricity':
        data = pd.DataFrame({
            'voltage': np.random.normal(220, 15, n_samples),
            'current': np.random.normal(50, 10, n_samples),
            'temperature': np.random.normal(45, 10, n_samples),
            'load': np.random.uniform(30, 95, n_samples)
        })
        # Rule: high temp and high load -> failure
        data['failure'] = ((data['temperature'] > 60) & (data['load'] > 85)).astype(int)
    elif department == 'water':
        data = pd.DataFrame({
            'pressure': np.random.normal(40, 8, n_samples),
            'flow': np.random.normal(100, 20, n_samples),
            'tank_level': np.random.uniform(10, 100, n_samples)
        })
        # Rule: low pressure and low flow -> failure
        data['failure'] = ((data['pressure'] < 30) & (data['flow'] < 70)).astype(int)
    elif department == 'waste':
        data = pd.DataFrame({
            'bin_level': np.random.uniform(0, 100, n_samples),
            'days_since_collection': np.random.randint(0, 14, n_samples)
        })
        # Rule: high bin level and many days -> failure
        data['failure'] = ((data['bin_level'] > 85) & (data['days_since_collection'] > 5)).astype(int)
    
    data.to_csv(f'ml/data/{department}_data.csv', index=False)
    return data

def train_model(department):
    print(f"Training model for {department}...")
    data = generate_sample_data(department)
    
    X = data.drop('failure', axis=1)
    y = data['failure']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"{department.capitalize()} Model Accuracy: {accuracy * 100:.2f}%")
    
    joblib.dump(model, f'ml/models/{department}_model.pkl')
    print(f"Model saved to ml/models/{department}_model.pkl")

if __name__ == "__main__":
    departments = ['electricity', 'water', 'waste']
    for dept in departments:
        train_model(dept)
    print("All models trained and saved successfully.")
