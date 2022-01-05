import { DadosService } from './../../servicos/dados.service';
import { Component, OnInit } from '@angular/core';

declare let google: any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dados: any

  constructor(private dadosService:DadosService) { }
  //aqui chamamos a função obterDados que está no dados.service para usar os dados declarados lá, fazemos o subscribe e armazenamos o result (que são do dados) dentro na minha variável dados
  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(result=>{
      this.dados = result
      this.iniciar()
    }

    )
  }
  //dentro da função iniciar vamos carregar algumas funções/pacotes/rotinas que o google gráficos precisa  para funcionar. O corechat permite que desenhe a maioria dos gráficos, os mais utilizados.
  //essa função iniciar está carregando pra demtro da nossa aplicação todos os pacotes do google gráfico, necessárioa pra a construção dos gráficos
  iniciar(): void{
    //mais recente - "current" e os pacotes que vamos usar
    google.charts.load('current', {'packages':['corechart']})
    //para esperar 1000ms para carregar os pacotes antes de executar a função
    setTimeout(()=>{
      google.charts.setOnLoadCallback(this.exibirGraficos())
    },1000)
  }

  //função que exibe os dados do gráfico
  exibirGraficos(){
    this.exibirPieChart()
    this.exibir3dPieChart()
    this.exibirCircPieChart()
    this.exibirBarChart()
    this.exibirLineChart()
    this.exibirColChart()
  }

  //exibir gráfico de pizza
  exibirPieChart(): void{
    const grafico = document.getElementById('pie_chart')
    //essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.PieChart(grafico)
    //a função draw desenha o gráfico e precisa como parâmetros os dados e as opções de gráficos
    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  //gáfico pizza 3d
  exibir3dPieChart(): void{
    const grafico = document.getElementById('3d_pie_chart')
    //essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.PieChart(grafico)
    //a função draw desenha o gráfico e precisa como parâmetros os dados e as opções de gráficos
    const opcoes = this.obterOpcoes()
    opcoes['is3D'] = true
    chart.draw(this.obterDataTable(), opcoes)

  }

  //gráfico rosquinha
  exibirCircPieChart(): void{
    const grafico = document.getElementById('circ_chart')
    //essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.PieChart(grafico)
    //a função draw desenha o gráfico e precisa como parâmetros os dados e as opções de gráficos
    const opcoes = this.obterOpcoes()
    //tamanho do circulo de dentro
    opcoes['pieHole'] = 0.4
    chart.draw(this.obterDataTable(), opcoes)
  }

  //gráfico de barras
  exibirBarChart(): void{
    const grafico = document.getElementById('bar_chart')
    //essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.BarChart(grafico)
    //a função draw desenha o gráfico e precisa como parâmetros os dados e as opções de gráficos

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  //gráfico de linha
  exibirLineChart(): void{
    const grafico = document.getElementById('line_chart')
    //essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.LineChart(grafico)
    //a função draw desenha o gráfico e precisa como parâmetros os dados e as opções de gráficos

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  exibirColChart(): void{
    const grafico = document.getElementById('col_chart')
    //essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.ColumnChart(grafico)
    //a função draw desenha o gráfico e precisa como parâmetros os dados e as opções de gráficos

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }


  obterDataTable(): any{

    const data = new google.visualization.DataTable()

    data.addColumn('string', "Mês")
    data.addColumn('number', "Quantidade")

    data.addRows(this.dados)

    return data
  }

  obterOpcoes(): any{
    return {
      'title': 'Quantidade de camisetas vendidas no semestre',
      'width': 400,
      'height': 300
    }
  }

}
