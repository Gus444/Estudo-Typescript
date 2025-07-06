import negociacao from "./negociacao.js";

export default class NegociacoesModel{

    private negociacoes: Array<negociacao> = [];//definindo oque vai estar dentro do array

    adiciona(negociacao: negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<negociacao>{//ReadonlyArray evita ques os dados da lista sejam alterados
        return this.negociacoes

        /*Tambem tem o spread operator [...] para criar uma copia do array original de negociacao,
        assim evitando que os dados sejam alterados
        */
    }
}