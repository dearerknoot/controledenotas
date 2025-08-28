const express = require("express"); // Framework para criar servidor e rotas
const mysql = require("mysql2"); // Biblioteca para conectar no MySQL
const path = require("path"); // Módulo nativo do Node para lidar com caminhos

const app = express(); // Cria a aplicação Express

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS da pasta public/)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco MySQL (via XAMPP)
const db = mysql.createConnection({
  host: "localhost", // Servidor do MySQL
  user: "root", // Usuário padrão do XAMPP
  password: "", // Senha (geralmente vazia no XAMPP)
  database: "turmas", // Nome do banco que você criou
});

// GET /usuarios → retorna todos os usuários do banco
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM alunos", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

// POST /usuarios → insere um novo usuário no banco
app.post("/usuarios", (req, res) => {
  const { nome, turmas,nota1,nota2,nota3 } = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO alunos (nome, turma,nota1,nota2,nota3) VALUES (?,?,?,?,?)", // Query SQL com placeholders
    [nome, turmas,nota1,nota2,nota3], // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Usuário adicionado com sucesso!" }); // Retorno de sucesso
    }
  );
});

// Inicia o servidor na porta 3000
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
