import { DiaDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import NegociacoesModel from "../models/negociacoes.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new NegociacoesModel();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView', false);
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.verificaDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociacoes em dias uteis pode ser executadas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    verificaDiaUtil(data) {
        return data.getDay() > DiaDaSemana.Domingo && data.getDay() < DiaDaSemana.Sabado;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociacão adicionada com sucesso');
    }
}
