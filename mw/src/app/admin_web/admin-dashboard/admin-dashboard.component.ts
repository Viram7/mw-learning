import { MatTabsModule } from '@angular/material/tabs';
import { Component, inject } from '@angular/core';
import { CommonModule,  } from '@angular/common';


import {
  NgApexchartsModule,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  responsive: ApexResponsive[];
};
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, MatTabsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  // Bar/Line chart

dashBoardApi='http://localhost:8000/api/admin/dashboard';
  http = inject(HttpClient);
 total_users = 0;
  total_sales = 0;
  total_batches = 0;
  total_teachers = 0;

  chartOptionsBar: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis;
  } = {
    series: [
      {
        name: "Sales",
        data: [10, 41, 35, 51, 49, 62, 69]
      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    title: {
      text: "Sales Over Time"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    }
  };

  // ✅ Pie chart
  genderChartData: PieChartOptions = {
    series: [60, 35, 5], // Male, Female, Other
    chart: {
      type: 'pie',
      height: 350
    },

    labels: ['Male', 'Female', 'not telled'],
    colors: ['#1E90FF', '#FF69B4', '#9E9E9E'],
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  ngOnInit(): void {

    this.http.get(this.dashBoardApi).subscribe((data: any) => {

   this.chartOptionsBar.xaxis.categories = data.data.sales.labels;
    this.chartOptionsBar.series[0].data = data.data.sales.data;
    this.genderChartData.series = data.data.users;

      this.total_users = data.data.total_users;
      this.total_sales = data.data.this_year_sales;
      this.total_batches = data.data.batch;
      this.total_teachers = data.data.teacher;
    });
  }







}


