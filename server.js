const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

//set up database
const pokemon = require('./models/pokemon.js');

app.get('/' , (req, res) => {
    res.send('Welcome to the Pokemon App !');
});

app.get('/pokemon' , (req, res) => {
    // res.send(pokemon);
    res.render("index.ejs", {pokemon:pokemon});
});

app.get('/pokemon/:id', (req, res) =>{
    // res.send(req.params.id);
    res.render('show.ejs',{
        pokemon:pokemon[req.params.id]
    })
})


app.listen(port, ()=> {
    console.log(`Port in linked to: ${port}`);
  });