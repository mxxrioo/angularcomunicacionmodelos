import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public numeros: Array<number>;
  public suma: number;

  constructor() {
    this.numeros = [];
    this.suma = 0;
    for (let i = 0; i < 5; i++) {
      this.generarNumero();
    }
  }

  generarNumero(): void {
    let numero = Math.floor(Math.random() * 100) + 1;
    this.numeros.push(numero);
  }

  sumarNumero(numero: number): void {
    this.suma += numero;
  }
}
