import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Persona, concatenar } from './Persona';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';


  constructor() {
    let persona = new Persona("andres", "masculino");
    //persona.nombre="camilo";
    //persona.edad=25;
    console.log(concatenar(persona.nombre, persona.sexo));
    
  }

}
