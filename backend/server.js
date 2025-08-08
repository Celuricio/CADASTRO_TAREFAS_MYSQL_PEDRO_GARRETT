const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./database/db');
const Tarefa = require('./models/tarefa');
const tarefaRoutes = require('./routes/tarefaRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', tarefaRoutes);
app.post('/tarefas', (req, res) => {
    console.log(req.body);
    // Lógica para processar a tarefa
    res.status(201).send('Tarefa recebida');
});

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco:', err);
  });
