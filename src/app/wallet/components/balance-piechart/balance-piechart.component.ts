import {Component, Input} from '@angular/core';
import {BarChartModule, NgxChartsModule} from "@swimlane/ngx-charts";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-balance-piechart',
  standalone: true,
  imports: [
    BarChartModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    NgxChartsModule
  ],
  templateUrl: './balance-piechart.component.html',
  styleUrl: './balance-piechart.component.css'
})
export class BalancePiechartComponent {
  @Input() title!: string;
// Pie chart data
  data = [
    { name: 'Savings', value: 50 },
    { name: 'Expenses', value: 50 }
  ];

  // Optional properties to show/hide legend, etc.
  showLegend: boolean = true;

  colorScheme: string = 'vivid';
}
