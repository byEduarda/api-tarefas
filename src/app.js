import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import tarefasRoutes from './routes/tarefasRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/tarefas', tarefasRoutes);
app.use('/tarefas/:id', tarefasRoutes);
app.use('/tarefas', tarefasRoutes);
app.use('/tarefas', tarefasRoutes);



app.get('/', (_req, res) => {
  res.json({ message: 'Tarefas API v2.1' });
});

export default app;