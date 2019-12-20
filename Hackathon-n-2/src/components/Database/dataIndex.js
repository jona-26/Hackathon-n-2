const express = require('express');
const connection = require('./config'); // importation du fichier "config.js" pour relier la base de donnéé.
const app = express();
const port = 3000; // çela correspondt à https://localhost:3000/

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});


// étape 2: création de la route pour récupérer l'ensemble des questions et les renvoyer au navigateur (client)
// récupération des données.

app.get('/api/question', (req, res) => { // écoute de l'url "/api/question" 

  // étapes 3 : connection à la base de données, et sélection des questions.
  connection.query('SELECT * from question', (err, results) => { // Permet de récupérer toutes les quetions dans la base de données "question".
  
    // envoyer les données récupérées (étape 3)

    if (err) { // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des questions'); // Pour renvoyer un message d'erreur au client(naviqateur)
    } else { // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});


app.get('/api/question/reponse', (req, res) => {

  connection.query('SELECT reponse from question', (err, results) => {

    if (err) {

      res.status(500).send('Erreur lors de la récupération des réponses');
      //res.status(500).send(err.toString() + 'Erreur lors de la récupération des réponses);

    } else {

      res.json(results);
    }
  });
});

// permet d'ecouter le serveur sur le port dedié.

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});




