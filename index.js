const express = require("express");
const cors = require("cors");
const tarefasRoutes = require("./src/routes/tarefasRoutes");
const connectToMongo = require("./src/config/mongoConnect");

connectToMongo();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/tarefas", tarefasRoutes);

app.get("/", (req, res) => {
    res.send("API de tarefas funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta: ${PORT}`)
});