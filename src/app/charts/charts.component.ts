import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { TranslateService } from '@ngx-translate/core';
import {AppService} from '../app.servie'


@Component({
   selector: 'app-charts',
   templateUrl: './charts.component.html',
   styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

   constructor(service :AppService) { }

   name = "";
   valuearr: any = [{
      name: 'John',
      data: [5, 3, 4, 7, 6],
      type: undefined
   }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
      type: undefined
   }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
      type: undefined
   }, {
      name: 'J',
      data: [5, 6, 2, 5, 4],
      type: undefined
   }];

   ngOnInit() {  this.barChartPopulation();
      this.pieChartBrowser();}

   chart = new Chart({
      chart: {
         type: 'line'
      },
      title: {
         text:""
      },
      credits: {
         enabled: false
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: this.valuearr

   });
   barChartPopulation() {
      Highcharts.chart('barChart', {
        chart: {
          type: 'bar'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high'
          },
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: this.valuearr
      });
    }
  
    pieChartBrowser() {
      Highcharts.chart('pieChart', {
        chart: {
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
          type: 'pie'
        },
        title: {
          text:""
        },
        tooltip: {
           
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
             enabled: false,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: this.valuearr
        
      });
    }
  
  
}

