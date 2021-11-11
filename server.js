const express = require('express');

const app = express();

const http = require('http');

app.set('view engine', 'ejs');

require('dotenv').config();

const dataBase = require('./Database/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/display', (req, res) => {
  dataBase.getAll((userinfo) => {
    res.render('display.ejs', { userinfo, user: 0, message: ' ' });
  });
});

app.get('/add', (req, res) => {
  res.render('insert.ejs');
});

app.get('/update', (req, res) => {
  res.render('update.ejs');
});
app.post('/updateUser', (req, res) => {
  if (req.body.name != '' && req.body.desc != '') {
    dataBase.updateClientAll(req.body.id, req.body.name, req.body.desc, (user) => {
      dataBase.getAll((userinfo) => {
        res.render('display.ejs', { userinfo, user: user.changedRows, message: 'Modification' });
      });
    });
  } else if (req.body.name === '') {
    dataBase.updateClientDesc(req.body.id, req.body.desc, (user) => {
      dataBase.getAll((userinfo) => {
        res.render('display.ejs', { userinfo, user: user.changedRows, message: 'Modification' });
      });
    });
  } else if (req.body.desc === '') {
    dataBase.updateClientName(req.body.id, req.body.name, (user) => {
      dataBase.getAll((userinfo) => {
        res.render('display.ejs', { userinfo, user: user.changedRows, message: 'Modification' });
      });
    });
  }
});
app.post('/addUser', (req, res) => {
  dataBase.insertClient(req.body.name, req.body.desc, (user) => {
    dataBase.getAll((userinfo) => {
      res.render('display.ejs', { userinfo, user: user.affectedRows, message: 'Ajout' });
    });
  });
});

app.get('/delete', (req, res) => {
  res.render('delete.ejs');
});

app.post('/deleteuser', (req, res) => {
  dataBase.deleteuser(req.body.id, (user) => {
    dataBase.getAll((userinfo) => {
      res.render('display.ejs', { userinfo, user: user.affectedRows, message: 'Suppression' });
    });
  });
});

http.createServer(app).listen(process.env.PORTConnexion | 5000);
