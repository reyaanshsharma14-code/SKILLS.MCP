CREATE DATABASE IF NOT EXISTS smartgov;
USE smartgov;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Super Admin', 'Electricity Admin', 'Water Admin', 'Waste Admin', 'Maintenance Staff', 'Citizen') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    head_user_id INT,
    FOREIGN KEY (head_user_id) REFERENCES Users(id)
);

CREATE TABLE Electricity (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    voltage DECIMAL(10,2),
    current DECIMAL(10,2),
    temperature DECIMAL(10,2),
    transformer_status VARCHAR(50),
    load_percentage DECIMAL(5,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Water (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    pressure DECIMAL(10,2),
    flow_rate DECIMAL(10,2),
    tank_level DECIMAL(5,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Waste (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    bin_level DECIMAL(5,2),
    truck_location VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    risk_percentage DECIMAL(5,2),
    probability DECIMAL(5,2),
    recommendation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES Departments(id)
);

CREATE TABLE Alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    severity ENUM('High', 'Medium', 'Low'),
    message TEXT,
    is_resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES Departments(id)
);

CREATE TABLE Complaints (
    id INT AUTO_INCREMENT PRIMARY KEY,
    citizen_id INT,
    department_id INT,
    description TEXT,
    status ENUM('Pending', 'In Progress', 'Resolved') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (citizen_id) REFERENCES Users(id),
    FOREIGN KEY (department_id) REFERENCES Departments(id)
);

-- Insert dummy data
INSERT INTO Users (name, email, password_hash, role) VALUES ('Super Admin', 'admin@smartgov.com', 'hashed_pass', 'Super Admin');
INSERT INTO Departments (name) VALUES ('Electricity'), ('Water'), ('Waste');
