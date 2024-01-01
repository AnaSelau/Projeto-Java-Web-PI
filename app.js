// app.js
const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const app = express();

// Configurações de conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sintomasbd2',
});

// Adicione este middleware
app.use(cors({
    origin: '*',
  }));

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err; // Encerrar o aplicativo em caso de falha na conexão
  } else {
    console.log('Conexão bem-sucedida ao banco de dados');
  }
});

// Rota para buscar sintomas com base na pesquisa
app.get('/sintomas/:termo', (req, res) => {
  try {
    const termo = req.params.termo;

    // Construir a consulta SQL para buscar sintomas relacionados ao termo
    const query = `SELECT nome FROM sintomas WHERE nome LIKE ? LIMIT 4`;

    db.query(query, [`%${termo}%`], (err, result) => {
      if (err) {
        console.error('Erro ao buscar sintomas:', err);
        res.status(500).send('Erro ao buscar sintomas do banco de dados');
      } else {
        // Extrair apenas os nomes dos sintomas
        const sintomas = result.map(item => item.nome);
        res.json(sintomas);
      }
    });
  } catch (error) {
    console.error('Erro na rota /sintomas/:termo:', error);
    res.status(500).send('Erro interno no servidor');
  }
});

// Iniciar o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

