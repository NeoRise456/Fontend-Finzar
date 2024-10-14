import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {BalanceDisplayComponent} from "../../components/balance-display/balance-display.component";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-wallet-view',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatTableModule, BalanceDisplayComponent,
  MatCheckboxModule],
  templateUrl: './wallet-view.component.html',
  styleUrl: './wallet-view.component.css'
})
export class WalletViewComponent {
  constructor( ) {
  }

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
