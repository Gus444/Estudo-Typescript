export default class negociacao{

    private _data: Date //no ts 'private' deixa os atributos privados ao inves de # como no js
    private _quantidade: number//caso nao tenha private no nome ele sera automaticamente 'public'
    private _valor: number

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime())//isso garante q a data seja imutavel
        return data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }
}