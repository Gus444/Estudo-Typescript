export default class NegociacoesModel {
    constructor() {
        this.negociacoes = []; //definindo oque vai estar dentro do array
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
        /*Tambem tem o spread operator [...] para criar uma copia do array original de negociacao,
        assim evitando que os dados sejam alterados
        */
    }
}
