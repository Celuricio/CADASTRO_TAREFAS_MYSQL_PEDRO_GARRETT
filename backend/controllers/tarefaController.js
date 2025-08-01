const Tarefa = require('../models/tarefa');

exports.listar = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const { titulo, descricao, responsavel, status } = req.body;
    const tarefa = await Tarefa.create({ titulo, descricao, responsavel, status });
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    const { id } = req.params;
    const qtd = await Tarefa.destroy({ where: { id } });
    if (qtd === 0) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
