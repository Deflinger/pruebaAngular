import { Component } from '@angular/core';



@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})
export class BodyComponent{
    
    mostrar= true;

    frase:any = {
        mensaje: 'Quedo todo achicharrado',
        autor: 'Fly de Dragon Quest'
    };
    
    personajes: String[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}