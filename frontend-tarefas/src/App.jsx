import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [atualizar, setAtualizar] = useState(false);

  const atualizarLista = () => setAtualizar(!atualizar);

  return (
    <div className="container">
      <h1>📋 Minhas Tarefas</h1>
      <TaskForm onNovaTarefa={atualizarLista} />
      <TaskList atualizar={atualizar} />
    </div>
  );
}

export default App;
