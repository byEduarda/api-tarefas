import { useEffect, useState } from "react";
import api from "../services/api";

export default function TaskList() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        api.get("/tarefas")
         .then((res) => setTarefas(res.data))
         .catch((err) => console.error("Erro ao buscar tarefas", err));
    }, []);


    return (
        <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Tarefas</h2>
      <ul className="space-y-2">
        {tarefas.map((tarefa) => (
          <li key={tarefa._id} className="border p-3 rounded">
            <strong>{tarefa.titulo}</strong>
            <p>{tarefa.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}