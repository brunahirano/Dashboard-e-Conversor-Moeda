import { ConversorService } from './../../servicos/conversor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  formulario: any
  valorConvertido: number
  estaVisivel: boolean


  constructor(private conversorService: ConversorService) {

    this.valorConvertido = 0
    this.estaVisivel = false
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      valor: new FormControl(null)

    })

  }

  converter(){
    //valor que foi digitado no input que tem o formControlName = valor
    const valorAConverter = this.formulario.value.valor
    this.estaVisivel = true
    this.conversorService.realizarConversao().subscribe(resultado => {
      console.log(resultado)
      //na api todas as moedas estão dentro de rates .BRL para o real
      this.valorConvertido= Number(valorAConverter * resultado.rates.BRL)
    })

  }

}
