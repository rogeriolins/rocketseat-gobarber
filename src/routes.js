/* Importa apenas o Router do express */
/* sucrase nele: const { Router } = require('express'); */
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req,res) => {
    res.json({ message: 'Server listen in port :3333'});
});

/* sucrase nele: module.exports = routes; */
export default routes;