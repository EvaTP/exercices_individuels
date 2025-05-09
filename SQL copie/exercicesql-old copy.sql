-- exercice ADA créer BDD EDUSIGN

-- CREATE TABLE edusign(
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- firstname TEXT NOT NULL,
-- email TEXT NOT NULL UNIQUE,
-- created_at DATETIME NOT NULL,
-- FOREIGN KEY (id) REFERENCES usersedusign(id)
-- );

CREATE TABLE edusign(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL, -- La clé étrangère référençant usersedusign.id
    firstname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usersedusign(id)
);

INSERT INTO edusign (user_id, firstname, email, created_at)
VALUES
(1, 'Ada', 'ada@test.fr', DATETIME('now')),
(2, 'Beatrice', 'bea@test.fr', DATETIME('now')),
(3, 'Bella', 'bella@test.fr', DATETIME('now')),
(4, 'Barbara', 'barbara@test.fr', DATETIME('now'));


CREATE TABLE usersedusign(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

INSERT INTO usersedusign (firstname, lastname, email)
VALUES
('Ada', 'Lovelace', 'ada@test.fr'),
('Beatrice', 'Worsley', 'bea@test.fr'),
('Bella', 'Guerin', 'bella@test.fr'),
('Barbara', 'Chase', 'barbara@test.fr');


-- NIVEAU FACILE
-- Sélectionner toutes les lignes de la table users
SELECT * FROM usersedusign;

-- Sélectionner uniquement la ligne où le prénom est Ada dans la table users
SELECT * FROM usersedusign WHERE firstname = 'Ada';

-- Sélectionner les lignes dont la première lettre du prénom est un B dans la table users
SELECT firstname FROM usersedusign WHERE firstname LIKE 'B%';

-- Compter le nombre de ligne qu’il y a dans la table users
SELECT COUNT(*) FROM usersedusign;

-- Compter le nombre de ligne dont la première lettre du prénom est un B dans la table users
SELECT COUNT(*) FROM usersedusign
WHERE firstname LIKE 'B%';

-- Afficher uniquement la colonne contenant le prénom de la table users.
SELECT firstname FROM usersedusign;


-- NIVEAU MOYEN

-- Insérer une ligne dans la table edusign qui correspond à la user Ada avec comme date de signature le 2024-05-30 09:30:00
INSERT INTO edusign(user_id, firstname, email, created_at)
VALUES
(1, 'Ada', 'ada@test.fr', '2024-05-30 09:30:00');

-- Insérer une ligne dans la table edusign qui correspond à la user Bella avec comme date de signature le 2024-05-30 09:30:00
INSERT INTO edusign(user_id, firstname, email, created_at)
VALUES
(3, 'Bella', 'bella@test.fr', '2024-05-30 09:30:00');
-- ==> voir problème constraint UNIQUE dans email

-- Insérer toutes les lignes de la table users dans la table edusign avec pour date de signature le 2024-09-01 09:30:00
ALTER TABLE edusign RENAME TO edusign_old;

CREATE TABLE edusign(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    firstname TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usersedusign(id)
);
-- (j'ai du recreer la table en enlevant la contrainte UNIQUE de email)

-- Insérer toutes les lignes de la table users dans la table edusign avec pour date de signature le 2024-09-01 09:30:00
INSERT INTO edusign (user_id, firstname, email, created_at)
SELECT id, firstname, email, '2024-09-01 09:30:00'
FROM usersedusign;


-- Sélectionner toutes les lignes de la table edusign ordonnées par date de signature de la plus récente à la plus ancienne et par user_id ascendant.
SELECT *
FROM edusign
ORDER BY 'created at' DESC, user_id;


-- Niveau moyen+ (bonus)

-- Dans la table edusign, afficher le nombre d’apprenantes par date.
SELECT COUNT(*) FROM edusign
ORDER BY;

-- Compter le nombre de ligne au sein de la table edusign dont le prénom est Bella, le nom de la colonne finale doit être volume