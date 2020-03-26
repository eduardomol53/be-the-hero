const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota de Login(Utilizado o método HTTP POST, pois entende-se que será criado uma nova sessão ao fazer login)
routes.post('/sessions', SessionController.create);

//Rota de manipulação de Ongs
routes.get('/ongs', OngController.index)

routes.post('/ongs', OngController.create);

routes.delete('/ongs', OngController.delete);

//Rota de manipulação de Casos (Incident)
routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

//Rota de listagem de Casos específicos de cada Ong
routes.get('/profile', ProfileController.index);


module.exports = routes;