import express from "express";

const app = express();
const PORT = 3000;

// Middlewares globais
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  return res.json({ status: "ok" });
});

// Subir servidor
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});
