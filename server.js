import agenda from "./db.js";
import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send(agenda);
});

app.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const contato = agenda.find((c) => c.id === id);

    if (contato) {
        res.status(200).send(contato);
    } else {
        res.status(404).send({mens: "contato nao encontrado"});
        return;
    }

});

app.post("/", (req, res) => {
    const contato = req.body;
    
    agenda.push(contato);
    res.status(201).send(contato);
});


app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indiceContato = agenda.findIndex((c) => c.id === id);
    contatoRemovido = agenda.splice(indiceContato, 1);

    res.status(200).send(contatoRemovido);
})


app.listen(3000);
console.log("=================== Agenda API web executando... ===================");