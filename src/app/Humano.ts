export class Humano{
    private _sexo: string;
    
    get sexo(): string {
        return this._sexo;
    }
    set sexo(value: string) {
        this._sexo = value;
    }

    constructor(sexo:string){
        this.sexo=sexo;
    }
}