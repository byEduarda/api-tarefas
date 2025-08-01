const express = require("express");
const router = express.Router();

let tarefas = [
    {
        id: 1,
        titulo: "Estudar Node.js",
        descricao: "Ver aula PretaLab e revisar código",
        status: "pendente",
        dataLimite: "04-08-2025"
    }
];

router.get("/", (req, res) => {
    res.status(200).json(tarefas);
});

routes.post("/", (req, res) => {
    const { titulo, descricao, status, dataLimite } = req.body;

    if(!titulo || !descricao) {
        return res.status(400).json({mensagem: "Título e descrição são obrigatórios."});
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        titulo, 
        descricao,
        status: status || "pendente",
        dataLimite: dataLimite || null
    };

    tarefa.push(novaTarefa);

    res.status(200).json(novaTarefa);
});


module.exports = router;