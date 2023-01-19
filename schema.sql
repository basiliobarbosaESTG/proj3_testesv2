CREATE DATABASE proj3_app;
USE proj3_app;

CREATE TABLE login(
    idLogin integer PRIMARY KEY AUTO_INCREMENT,
    idUtilizador integer,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO login(idUtilizador, username, password)
VALUES
(1, 'basilio', 'basilio123'),
(2, 'soares','soares123'),
(3, 'pedro','pedro123');