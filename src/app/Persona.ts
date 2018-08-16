import { Humano } from "./Humano";
import { SerVivo } from "./SerVivo";

export enum Vehiculo{
    Moto, Carro, Avion
}

export const PI=3.14;

export function concatenar(nombre:string,sexo:string):string{
    return nombre+" "+sexo;
}

export class Persona extends Humano implements SerVivo{

    
    private _nombre: string;

    comer(): string {
        return "carne";
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    //constructor
    /* comentario multiple
    linea 
    */
    constructor(nombre:string,sexo:string){
        super(sexo);
        this._nombre=nombre;
    }

    maneja(vehiculo:Vehiculo):string{
        switch (vehiculo){
            case Vehiculo.Carro:
                return "Maneja carro";
            case Vehiculo.Moto:
                return "Maneja moto";
            case Vehiculo.Avion:
                return "Maneja avion";
            default:
                return "camina";
        }
    }
}