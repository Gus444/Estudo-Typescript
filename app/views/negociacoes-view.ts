import NegociacoesModel from "../models/negociacoes.js";
import View from "./view.js";


export default class NegociacoesView extends View<NegociacoesModel>{

    protected template(model: NegociacoesModel): string{
        return `     
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </th>
            </thead>
            <tbody>
            ${model.lista().map(negociacao => {
                return`
                    <tr>
                        <td>${this.formatar(negociacao.data)}</td>    
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                `;
            }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date){
        return new Intl.DateTimeFormat().format(data)
    }
}