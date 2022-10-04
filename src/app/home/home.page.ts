import { Component } from '@angular/core';

interface NumerosAleatorios{ 
numeroAleatorio: number;
 numeroIntroducido: number;
 mensaje: string;
 intentos: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  juegoAleatorio: NumerosAleatorios = 
  {
    numeroAleatorio : Math.floor(Math.random() * 100) +1,
    numeroIntroducido : 0,
    mensaje : "",
    intentos : 5
  }


  constructor() {
  }

  compararNumero() {
    if(this.juegoAleatorio.intentos == 0)
      this.juegoAleatorio.mensaje = `Se acabaron los intentos. El numero introducido era ${this.juegoAleatorio.numeroAleatorio}`;
    else{
      if(this.juegoAleatorio.numeroIntroducido > this.juegoAleatorio.numeroAleatorio){
        this.juegoAleatorio.mensaje = "El número introducido es mayor que el número aleatorio";
      } 
      else if(this.juegoAleatorio.numeroIntroducido < this.juegoAleatorio.numeroAleatorio) {
        this.juegoAleatorio.mensaje = "El número introducido es menor que el número aleatorio";
      } 
      else if(this.juegoAleatorio.numeroIntroducido == this.juegoAleatorio.numeroAleatorio) {
        this.juegoAleatorio.mensaje = `¡¡¡HAS ACERTADO!!! El número aleatorio era ${this.juegoAleatorio.numeroAleatorio}`;
      }
      else {
        this.juegoAleatorio.mensaje = "El dato introducido no es un número";
      }
      this.juegoAleatorio.intentos--;
    }
    
  }

  clearText(){
    this.juegoAleatorio.mensaje = "Introduce un número de 0 a 100";
    this.juegoAleatorio.intentos = 5;
  }

}

