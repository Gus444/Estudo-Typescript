import { DiaDaSemana } from "../enums/dias-da-semana.js"; //usando uma Enumeracao pra dias da semana
import Negociacao from "../models/negociacao.js";
import NegociacoesModel from "../models/negociacoes.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export default class NegociacaoController{

    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private negociacoes = new NegociacoesModel();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);//pegando id do html onde sera carregado o template
    private mensagemView = new MensagemView('#mensagemView', false);

    constructor(){
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
        const negociacao = Negociacao.criaDe( //criaDe é um metodo estatico e por isso nao precisa ser instanciado
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value

        )

        if(!this.verificaDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociacoes em dias uteis pode ser executadas');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private verificaDiaUtil(data: Date){
        return  data.getDay() > DiaDaSemana.Domingo && data.getDay() < DiaDaSemana.Sabado;
    }

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociacão adicionada com sucesso')
    }
}