import { useState } from "react";
import api from "../services/api";

export default function TaskForm({ onNovaTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nova = { titulo, descricao };
      const res = await api.post("/tarefas", nova);
      onNovaTarefa(res.data);
      setTitulo("");
      setDescricao("");
    } catch (err) {
      alert("Erro ao adicionar tarefa.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Adicionar Tarefa
      </button>
    </form>
  );
}
