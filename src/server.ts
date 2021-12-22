import express, { Request, Response } from 'express'
import { enderecoPorCep } from './cep';

const app = express();


app.get('/', (req: Request, res:Response) => {
    res.send(`<h1> envie uma requisição para "http:localhost:3333/cep/{numero do cep}" </h1>`)
})


app.get('/cep/:cep', async (req:Request, res:Response)=> {
  const cep = req.params.cep;
  try{
    const endereco = await enderecoPorCep(cep)
    res.send(endereco)
  }catch(e){
    res.status(404).send({error: e.message})
  }
})


app.listen(3333, () =>{
  console.log('servidor aberto na porta 3333');
})