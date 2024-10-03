import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-balance-line-change-display',
  standalone: true,
  imports: [MatCardModule, NgxChartsModule],
  templateUrl: './balance-line-change-display.component.html',
  styleUrls: ['./balance-line-change-display.component.css']
})
export class BalanceLineChangeDisplayComponent {

  data = [
    {
      "name": "Balance",
      "series": [
        { "name": "January", "value": 2700 },
        { "name": "February", "value": 2000 },
        { "name": "March", "value": 2300 },
        { "name": "April", "value": 2500 },
        { "name": "May", "value": 2000 },
        { "name": "June", "value": 2200 },
        { "name": "July", "value": 2800 },
        { "name": "August", "value": 2000 }
      ]
    }
  ];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Balance';
  colorScheme : string = 'vivid';
}
