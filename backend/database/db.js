const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ({
  dialect: 'sqlite',
  storage: './tarefas.db'
});

sequelize.authenticate()
 .then(() => console.log('Conectado ao banco sqlite'))
 .catch(err => console.log('Erro ao conectar ao banco sqlite', err));

 module.exports = sequelize;