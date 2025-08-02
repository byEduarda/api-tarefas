import express from "express";
const router = express.Router();
import Tarefa from '../models/tarefa.js'
import { deletarTarefa} from '../controllers/tarefaController.js';

router.get("/", async (req, res) => {
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
});


router.post("/", async (req, res) => {
    try {
        const { titulo, descricao, status, dataLimite } = req.body;

        if(!titulo || !descricao) {
            return res.status(400).json({mensagem: "Título e descrição são obrigatórios."});
        }

        const novaTarefa = new Tarefa({ titulo, descricao, status, dataLimite });
        const tarefaSalva = await novaTarefa.save();


        res.status(201).json(tarefaSalva);
    }catch (error) {
        res.status(500).json({ erro: erro.message });
    }
});

router.delete("/:id", deletarTarefa);

export default router;