const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ("cadastro_tarefas", "tarefas_user", "123456", {
  dialect: 'mysql',
  timestamp: false,
});

sequelize.authenticate()
 .then(() => console.log('Conectado ao banco sqlite'))
 .catch(err => console.log('Erro ao conectar ao banco sqlite', err));

 module.exports = sequelize;