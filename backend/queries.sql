use proj3_v2;
DROP TABLE if exists alunos;
CREATE TABLE alunos(
    id int,
    nome varchar(255),
    morada varchar(255)
);

INSERT INTO alunos(id, nome, morada) VALUES(1, "ze", "rua1");
SELECT * FROM alunos;