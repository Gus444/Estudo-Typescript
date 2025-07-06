import negociacaoController from "./controllers/negociacaoController.js";
import negociacao from "./models/negociacao.js";


const Negociacao = new negociacao(new Date(),10,10);
const ctrl = new negociacaoController()
const form = document.querySelector('.form')
form.addEventListener('submit', event => {
    event.preventDefault()
    ctrl.adiciona()
})
