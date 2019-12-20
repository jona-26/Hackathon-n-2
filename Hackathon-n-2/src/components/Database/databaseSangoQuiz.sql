CREATE DATABASE sangoQuiz;

USE sangoQuiz;

CREATE TABLE question (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question VARCHAR(255) NOT NULL,
    reponse VARCHAR(255) NOT NULL
);

INSERT INTO question (question, reponse)
VALUES 
('Qui est sangoku ?','Le héros principal du manga Dragon Ball'),
('Comment est ressuscité Sangoku pour la deuxième fois ?','Par le sacrifice du grand maître des dieux'),
('Quelle est la particularité du Super Saiyan de Sangoku ?','La couleur de ses cheveux'),
('Quelle est la transformation maximale de Sangoku dans la saga Dragon Ball Z ?','Super Saiyan 3'),
('Combien y a-t-il de boules de crystal ?','7'),
("Trouvez l'intrus !",'Freezer'),
('Que fait le petit Sangohan lors de la pleine lune ?','Il se transforme en gorille');
