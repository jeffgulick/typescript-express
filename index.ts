import express from 'express';
const app = express();

app.get('/', (req, res) =>
  res.send('welcome to your basic Express Server with TypeScript')
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`⚡️[server]: Listening on port ${PORT}`));
