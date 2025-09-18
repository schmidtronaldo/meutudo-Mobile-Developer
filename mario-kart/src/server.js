
import express from 'express';  
import cors from 'cors';        

const app = express();
const port = 3001;

// Middleware para aceitar JSON
app.use(express.json());
app.use(cors());  // Habilitando CORS

// Rota de exemplo
app.get('/api/data', (req, res) => {
  res.json({ message: 'Olá do backend!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
