const express = require("express");
const router = express.Router();

let tarefas = [
    {
        id: 1,
        título: "Estudar Node.js",
        descrição: "Ver aula PretaLab e revisar código",
        status: "pendente",
        dataLimite: "04-08-2025"
    }
];

router.get("/", (req, res) => {
    res.status(200).json(tarefas);
});

module.exports = router;