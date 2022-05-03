import express from "express";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Success!!' });
});


app.listen(3333, () => console.log('Sever is running in PORT: 3333!'));