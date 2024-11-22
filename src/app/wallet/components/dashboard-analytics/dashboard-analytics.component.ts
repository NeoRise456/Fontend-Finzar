import {Component, Input, OnInit} from '@angular/core';
import {PeriodFilterComponent} from "../../../public/components/period-filter/period-filter.component";
import {DashboardFiltersComponent} from "../dashboard-filters/dashboard-filters.component";
import {Wallet} from "../../model/wallet.entity";
import {BalanceDisplayComponent} from "../balance-display/balance-display.component";
import {BalanceLineChangeDisplayComponent} from "../balance-line-change-display/balance-line-change-display.component";
import {BalanceBarChangeDisplayComponent} from "../balance-bar-change-display/balance-bar-change-display.component";
import {BalancePiechartComponent} from "../balance-piechart/balance-piechart.component";
import { ExpensesApiService } from "../../services/expenses-api.service";
import { EarningsApiService } from "../../services/earnings-api.service";
import { Expense } from "../../model/expense.entity";
import { Earning } from "../../model/earning.entity";
import {WalletApiService} from "../../../shared/services/wallet-api.service";

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
export class DashboardAnalyticsComponent implements OnInit{
  @Input() userId!: number;
  @Input() wallets!: Wallet[];

  totalBalance: number = 0;
  periodEarning: number = 0;
  periodExpense: number = 0;
  periodChange: number = 0;

  constructor(private expensesApiService: ExpensesApiService, private earningsApiService: EarningsApiService,
              private walletApiService: WalletApiService) {
  }

  ngOnInit(): void {
    this.expensesApiService.getExpensesByWalletId(312).subscribe((expenses: Expense[]) => {
      this.periodExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
      this.periodChange -= this.periodExpense;
    });
    this.earningsApiService.getEarningsByWalletId(312).subscribe((earnings: Earning[]) => {
      this.periodEarning = earnings.reduce((acc, earning) => acc + earning.amount, 0);
      this.periodChange += this.periodEarning;
    });

    this.walletApiService.getWalletsByUserId(this.userId).subscribe((wallets: Wallet[]) => {
        this.totalBalance = wallets.reduce((acc, wallet) => acc + wallet.balance, 0);
    });

  }

  titles = [
    'Total Balance',
    'Total Period Change',
    'Total Period Expenses',
    'Total Period Income',
    'Period Income',
    'Period Expenses'
  ];
}
