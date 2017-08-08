-- Create burgers database --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create burgers table --
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	burger_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);