import express from 'express';

//Routes
import userRoutes from './users.routes.js';
import todosRoutes from './todos.routes.js'

const app = express();

//Define routes
app.use('/users', userRoutes);
app.use('/todos', todosRoutes);

export default app;