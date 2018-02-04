import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  lineChart: Chart;
  barChart: Chart;
  labels: Array<String>;
  dataLine;
  dataBar;

  constructor() { }

  ngOnInit() {
    this.initializeDataMock();
    this.createLineChart();
    this.createBarChart();
  }

  createLineChart(): void {
    this.lineChart = this.createChart('canvasLine', 'line');
  }

  createBarChart(): void {
    this.lineChart = this.createChart('canvasBar', 'bar');
  }

  private createChart(context: string, typeChart: string): Chart {
    return new Chart(context, {
      type: typeChart,
      data: {
        labels: this.labels,
        datasets: typeChart === 'line' ? this.dataLine : this.dataBar,
        fill: false
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  initializeDataMock(): void {
    this.labels = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio'
    ];

    this.dataLine = [
      {
        data: [10, 22, 25, 46, 48],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        backgroundColor: 'rgba(255,99,132,1)',
        fill: false
      }
    ];

    this.dataBar = [{
      data: [10, 22, 25, 46, 48],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }];
  }
}
