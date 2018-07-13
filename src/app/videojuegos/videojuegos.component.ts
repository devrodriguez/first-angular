import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent {
    // Si no defino 'public' se infiere
    public nombre:string;
    public mejorJuego:string;
    public mejorJuegoRetro:string;
    public mostrarRetro:boolean;
    public videojuegos:Array<object>;

    constructor() {
        this.nombre = 'Videojuegos';
        this.mejorJuego = 'GTA 5';
        this.mejorJuegoRetro = 'Super Mario 64';
        this.mostrarRetro = true;
        this.videojuegos = [
            { name: 'Los simpson', downloads: 15 },
            { name: 'Mario Kart', downloads: 156 },
            { name: 'GTA 5', downloads: 11 }
        ];
    }
}