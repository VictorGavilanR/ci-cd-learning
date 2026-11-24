import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend funcionando correctamente",
  });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
  });
}

export default app;
