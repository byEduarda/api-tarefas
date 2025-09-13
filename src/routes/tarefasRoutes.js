import express from 'express';
import { Router } from 'express';
import { create, deletarTarefa, getTarefa, getTarefaById} from '../controllers/tarefaController.js';

const router = Router();

router.get("/", getTarefa);
router.get("/", getTarefaById);
router.post("/", create); 
router.delete("/:id", deletarTarefa);

export default router;