const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log('Name:', name);
    console.log('Email:', email);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
