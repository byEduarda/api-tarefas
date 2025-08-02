import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema ({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, default: "pendente" },
    dataLimite: { type: Date },
});

const Tarefa = mongoose.model("Tarefa", tarefaSchema);

export default Tarefa; 