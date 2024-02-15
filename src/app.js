import express  from 'express';
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import taskStatusRoutes from './routes/taskStatus.routes.js';

const app = express();

// Middlewares
app.use(express.json());

app.use(projectsRoutes)
app.use(tasksRoutes)
app.use(taskStatusRoutes)

export default app;