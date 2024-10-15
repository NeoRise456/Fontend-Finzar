import { Component } from '@angular/core';
import {BalancePiechartComponent} from "../../../wallet/components/balance-piechart/balance-piechart.component";
import {MatCardModule} from "@angular/material/card";
import {BalanceDisplayComponent} from "../../../wallet/components/balance-display/balance-display.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-savings-detail',
  standalone: true,
  imports: [
    BalancePiechartComponent,
    MatCardModule,
    BalanceDisplayComponent,
    MatIconButton,
    MatIcon,
    MatButton
  ],
  templateUrl: './savings-detail.component.html',
  styleUrl: './savings-detail.component.css'
})
export class SavingsDetailComponent {
  titles = [
    'Total Balance',
    'Total Period Change',
    'Total Period Expenses',
    'Total Period Income',
    'Period Income',
    'Period Expenses',
    'Saving asdf'
  ];

  balances = [
    2000,
    -123,
    4000,
    345
  ];



}
