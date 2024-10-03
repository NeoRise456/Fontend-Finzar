import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-balance-bar-change-display',
  standalone: true,
  imports: [MatCardModule, NgxChartsModule],
  templateUrl: './balance-bar-change-display.component.html',
  styleUrl: './balance-bar-change-display.component.css'
})
export class BalanceBarChangeDisplayComponent {
  data = [
    {
      "name": "January",
      "series": [
        { "name": "earnings", "value": 3000 },
        { "name": "expenses", "value": 300 }
      ]
    },
    {
      "name": "February",
      "series": [
        { "name": "earnings", "value": 2500 },
        { "name": "expenses", "value": 500 }
      ]
    },
    {
      "name": "March",
      "series": [
        { "name": "earnings", "value": 3000 },
        { "name": "expenses", "value": 1000 }
      ]
    },
    {
      "name": "April",
      "series": [
        { "name": "earnings", "value": 3000 },
        { "name": "expenses", "value": 200 }
      ]
    }
  ];

  // Optional properties to show/hide axis, legend, etc.
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Money';

  colorScheme: string = 'vivid';

  // Set Y-axis scale manually if needed
  yScaleMin: number = 4000;
  yScaleMax: number = 8000;
}
