import Negociacao from "../models/negociacao.js";
import NegociacoesModel from "../models/negociacoes.js";

export default class negociacaoController{

    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private negociacoes = new NegociacoesModel();

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
    
        negociacao.data.setDate(12)
        console.log(this.negociacoes.lista())
        this.limparFormulario()
    }

    criaNegociacao(): Negociacao{

        const exp = /-/g;//expressao regular
        const date = new Date(this.inputData.value.replace(exp, ','));//substituindo '/' por ,
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor); 
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
}