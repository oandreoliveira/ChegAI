const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
const mongoose = require('mongoose');
require('./CadastroVagas');
app.use(express.json({ limit: '10kb' }));

const CadastroVaga = mongoose.model('CadastroVagas');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexão com o Mongo realizada com sucesso!');
});
mongoose.connection.on('error', (err) => {
  console.log('A conexão com o Mongo não rolou!', err);
});

app.get('/', (req, res) => {
  CadastroVaga.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/cadastro-de-vaga', (req, res) => {
  const cadastroVaga = new CadastroVaga({
    nameCompany: req.body.nameCompany,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    description: req.body.description,
    vacancyCode: req.body.vacancyCode,
  });
  cadastroVaga
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/delete', (req, res) => { //testar com delete
  CadastroVaga.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/atualizar', (req, res) => { //testar com put
  CadastroVaga.findByIdAndUpdate(req.body.id, {
    nameCompany: req.body.nameCompany,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    description: req.body.description,
    vacancyCode: req.body.vacancyCode,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('servidor no ar!');
});
