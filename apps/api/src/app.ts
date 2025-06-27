import express from 'express';

const PORT = process.env.API_PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
