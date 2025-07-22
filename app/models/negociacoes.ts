import Negociacao from "./negociacao.js";

export default class NegociacoesModel{

    private negociacoes: Array<Negociacao> = [];//definindo oque vai estar dentro do array

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao>{//ReadonlyArray evita ques os dados da lista sejam alterados
        return this.negociacoes

        /*Tambem tem o spread operator [...] para criar uma copia do array original de negociacao,
        assim evitando que os dados sejam alterados
        */
    }
}