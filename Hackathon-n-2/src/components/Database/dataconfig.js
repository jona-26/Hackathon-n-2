const  mysql = require('mysql');
const  connection = mysql.createConnection({
    
host :'localhost', // adresse du serveur
user :'user', // le nom d'utilisateur
password :'???????', // le mot de passe
database :'sangoQuiz', // le nom de la base de données
});




module.exports = connection;

