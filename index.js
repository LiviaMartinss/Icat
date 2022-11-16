const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Iam Cat!')
});

app.post('/user',(req, res) => {
    res.send('Lista de adoção');
});

app.put('/user/:id', (req, res) =>{
    res.send('Incluir nova adoção');
});

app.delete('/user/:id',(req, res )=>{
    res.send('excluir adoção ${req.params.id}');
});

app.listen(3000, () => {
console.log(`Rodando`)
});


