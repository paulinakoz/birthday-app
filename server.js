const Birthday = require('./src/birthday.js')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index'); 
});

app.post('/birthday', (req, res) => {
    let day = req.body.day;
    let month = req.body.month;
    let name = req.body.name;
    const birthday = new Birthday(day, month, name)
    res.render('pages/birthday', {response: birthday.isBirthday()});
});

app.listen(port, () => {
  console.log(`Birthday app listening at http://localhost:${port}`);
});