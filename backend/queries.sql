use proj3_v2;
DROP TABLE if exists alunos;
CREATE TABLE alunos(
    id int,
    nome varchar(255),
    morada varchar(255)
);

INSERT INTO alunos(id, nome, morada) VALUES(1, "ze", "rua1");

SELECT * FROM alunos;

/*CREATE TABLE professores(
    id int,
    nome varchar(255),
    morada varchar(255)
);*/
DROP TABLE disciplinas;

DROP TABLE utilizadores;
DROP TABLE if exists utilizadores;
DROP TABLE if exists disciplinas;

CREATE TABLE utilizadores(
	idUtilizador int NOT NULL AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    -- contacto varchar(255) NOT NULL,
    morada varchar(255) NOT NULL,
    PRIMARY KEY (idUtilizador)
);



CREATE TABLE disciplinas(
	idDisciplina int NOT NULL AUTO_INCREMENT,
	idUtilizador int NOT NULL,
    nome varchar(255) NOT NULL,
    topico varchar(255) NOT NULL,
    pdf varchar(255) NOT NULL,
    PRIMARY KEY (idDisciplina),
    FOREIGN KEY (idUtilizador) REFERENCES utilizadores(idUtilizador)
);