const express = require('express');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index');
// Serve os arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (index.html)
app.use('/', indexRoutes);


// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
