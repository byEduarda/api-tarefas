import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import tarefasRoutes from './src/routes/tarefasRoutes.js';
import connectToMongo from './src/config/mongoConnect.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectToMongo();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/tarefas', tarefasRoutes);

app.use(express.static(path.join(__dirname, '../frontend-tarefas/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend-tarefas/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta: ${PORT}`);
});
