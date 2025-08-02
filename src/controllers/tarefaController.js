import { Tarefa } from '../models/tarefa.js'; 

export async function deletarTarefa(req, res) {
  try {
    const { id } = req.params;
    await Tarefa.findByIdAndDelete(id);
    res.status(200).json({ mensagem: "Tarefa deletada com sucesso." });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}
