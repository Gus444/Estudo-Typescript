import NegociacaoController from "./controllers/negociacaoController.js";
import Negociacao from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(),10,10);
const ctrl = new NegociacaoController()
const form = document.querySelector('.form')
    if(form){
        form.addEventListener('submit', event => {
        event.preventDefault()
        ctrl.adiciona()
    })
}else{
    throw Error('verifique se o form existe')
}


