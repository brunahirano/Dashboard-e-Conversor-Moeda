import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados=[
    ['Janeiro', 33],
    [ 'Fevareiro', 45],
    ['Marco', 67],
    ['Abril', 16],
    ['Maio', 78],
    ['Junho', 21]
  ]

  constructor() { }
//a função obterDados - está pegando os dados que acabamos de criar e com o observable. next estamos colocamos os dados a disposição para qualquer outra função fazer um subscribe e conseguir usar/pegar os dados criados
  obterDados():Observable<any>{
    return new Observable(resultado=>{
      resultado.next(this.dados)
      resultado.complete()
    })
  }

}

//posso nomear o parâmetro com qualquer palavra que quiser
// obterDados():Observable<any>{
  //   return new Observable(observable=>{
  //     observable.next(this.dados)
  //     observable.complete()
  //   })
  // }

