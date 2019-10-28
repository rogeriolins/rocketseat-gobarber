/* Importa dos modulos

    const express = require('express');
    const routes = require('./routes'); 

    Pelo sucrase mudamos a sintaxe para import express from 'express'

*/
import express from 'express';
import routes from './routes';

/* Classe da App */
class App {

    /* Construtor da minha classe */
    constructor() {
        this.server = express();
        /* Instanciando middlewares e routes */
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

}

/* Exportando o servidor */
/* sucrase nele: module.exports = new App().server; */
export default new App().server;