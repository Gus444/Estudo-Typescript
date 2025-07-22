export default abstract class View <T>{// o T serve pra eu poder definir o tipo na classe de heranca e não deixar um tipo fixo na classe pai
                //abstract serve para não poder criar uma instancia de view apenas as classes herdeiras dela
    protected elemento: HTMLElement//protected faz com que apenas as classes herdeiras de view acessem esse elemento
    private escapar = false;

    constructor(seletor: string, escapar?: boolean){ //'?' torna escapar um parametro opcional
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement
        }else{
        throw Error(`Seletor ${seletor} não existe no DOM`)
        }
        if(escapar){
            this.escapar = escapar;
        }
    }



    protected abstract template(model: T): string
    //abstract obriga a classe filha a implementar esse metodo

    public update(model: T): void{
        let template = this.template(model)
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')//protegendo template
        }
        this.elemento.innerHTML = template
    }
}