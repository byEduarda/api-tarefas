import Tarefa from '../models/tarefa.js'; 

export async function deletarTarefa(req, res) {
  try {
    const { id } = req.params;
    await Tarefa.findByIdAndDelete(id);
    res.status(200).json({ mensagem: "Tarefa deletada com sucesso." });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

export async function create(req, res) {
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
};

export async function getTarefa(req, res) { 
  try{
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
  }catch (error) {
    res.status(500).json({ message: "Tarefa não encontrada" });
  }
}

export async function getTarefaById(req, res) {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findById(id);
    res.status(200).json(tarefa);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

