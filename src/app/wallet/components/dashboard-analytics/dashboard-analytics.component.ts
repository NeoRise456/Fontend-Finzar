import {Component, Input} from '@angular/core';
import {PeriodFilterComponent} from "../../../shared/components/period-filter/period-filter.component";
import {DashboardFiltersComponent} from "../dashboard-filters/dashboard-filters.component";
import {Wallet} from "../../models/wallet.entity";
import {BalanceDisplayComponent} from "../balance-display/balance-display.component";
import {BalanceChangeDisplayComponent} from "../balance-change-display/balance-change-display.component";

@Component({
  selector: 'app-wallet-analytics',
  standalone: true,
  imports: [
    PeriodFilterComponent,
    DashboardFiltersComponent,
    BalanceDisplayComponent,
    BalanceChangeDisplayComponent
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
    'Total Period Income'
  ];

  balances = [
    2000,
    -123,
    4000,
    345
  ];


}
