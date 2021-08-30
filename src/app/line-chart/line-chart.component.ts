import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ICapitalBalanceOutputModel } from '../model/capital-balance-output.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() set capitalBalanceOutput(val: ICapitalBalanceOutputModel[]) {
    if (val)
      this.prepareLineChart(val)
    else
      this.isChartReady = false;
  };

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[]; 
  public lineChartOptions:any  = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#0d6efd',
      backgroundColor: '#ffffff6b',
    },
  ];
  public lineChartLegend = true;
  public lineChartType:ChartType = 'line';
  public lineChartPlugins = [];
  public isChartReady: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  prepareLineChart(capitalBalanceOutput: ICapitalBalanceOutputModel[]) {
    console.log(capitalBalanceOutput)
    let year = [];
    let startBalance = [];
    capitalBalanceOutput.forEach(item => {
      year.push(item.Year)
      startBalance.push(item.StartBalance)
    });
    this.lineChartData = [
      { data: startBalance, label: 'Capital Balance Projection' },
    ];
    this.lineChartLabels = year;
    this.isChartReady = true;
  }
}
