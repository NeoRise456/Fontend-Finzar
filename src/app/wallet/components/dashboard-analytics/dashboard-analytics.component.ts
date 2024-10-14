import {Component, Input} from '@angular/core';
import {PeriodFilterComponent} from "../../../public/components/period-filter/period-filter.component";
import {DashboardFiltersComponent} from "../dashboard-filters/dashboard-filters.component";
import {Wallet} from "../../model/wallet.entity";
import {BalanceDisplayComponent} from "../balance-display/balance-display.component";
import {BalanceLineChangeDisplayComponent} from "../balance-line-change-display/balance-line-change-display.component";
import {BalanceBarChangeDisplayComponent} from "../balance-bar-change-display/balance-bar-change-display.component";
import {BalancePiechartComponent} from "../balance-piechart/balance-piechart.component";

@Component({
  selector: 'app-dashboard-analytics',
  standalone: true,
  imports: [
    PeriodFilterComponent,
    DashboardFiltersComponent,
    BalanceDisplayComponent,
    BalanceLineChangeDisplayComponent,
    BalanceBarChangeDisplayComponent,
    BalancePiechartComponent
  ],
  templateUrl: './dashboard-analytics.component.html',
  styleUrl: './dashboard-analytics.component.css'
})
export class DashboardAnalyticsComponent {
  @Input() wallets: Wallet[] = [];

  titles = [
    'Total Balance',
    'Total Period Change',
    'Total Period Expenses',
    'Total Period Income',
    'Period Income',
    'Period Expenses'
  ];

  balances = [
    2000,
    -123,
    4000,
    345
  ];


}
