const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) =>  res.send("Hello world"));
app.post('/submit', (req, res) => {
    const name = req.body.Uma;
    const email = req.body.umajinka4@gmail.com;
    console.log('Name:',Uma);
    console.log('Email:',umajinka4@gmail.com);

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`);
});
