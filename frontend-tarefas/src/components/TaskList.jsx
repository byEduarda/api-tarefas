import { useEffect, useState } from "react";
import api from "../services/api";

export default function TaskList({ atualizar }) {
  const [tarefas, setTarefas] = useState([]);

  const buscarTarefas = () => {
    api.get("/tarefas")
      .then((res) => setTarefas(res.data))
      .catch((err) => console.error("Erro ao buscar tarefas", err));
  };

  useEffect(() => {
    buscarTarefas();
  }, [atualizar]);

  const deletarTarefa = async (id) => {
    try {
      await api.delete(`/tarefas/${id}`);
      buscarTarefas(); 
    } catch (err) {
      alert("Erro ao deletar tarefa.");
    }
  };

  if (tarefas.length === 0) {
    return <p>🎉 Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Tarefas</h2>
      <ul className="space-y-2">
        {tarefas.map((tarefa) => (
          <li key={tarefa._id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <strong>{tarefa.titulo}</strong>
              <p>{tarefa.descricao}</p>
            </div>
            <button
              onClick={() => deletarTarefa(tarefa._id)}
              className="bg-red-600 text-white px-3 py-1 rounded ml-4"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
