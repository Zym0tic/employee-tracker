-- create database
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

-- tables

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    Last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
);

CREATE TABLE role (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
);

CREATE TABLE department (
    id INT,
    name VARCHAR(30),
);

