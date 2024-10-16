import { Component, OnInit } from '@angular/core';
import {BalancePiechartComponent} from "../../../wallet/components/balance-piechart/balance-piechart.component";
import {MatCardModule} from "@angular/material/card";
import {BalanceDisplayComponent} from "../../../wallet/components/balance-display/balance-display.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ActivatedRoute} from "@angular/router";
import {SavingApiService} from "../../services/saving-api.service";
import {Saving} from "../../model/saving.entity";
import {SavingTransaction} from "../../model/saving-transaction.entity";
import { MatTableModule } from '@angular/material/table';
import {MatProgressBar} from "@angular/material/progress-bar";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-savings-detail',
  standalone: true,
  templateUrl: './savings-detail.component.html',
  styleUrls: ['./savings-detail.component.css'],
  imports: [
    BalancePiechartComponent,
    MatCardModule,
    BalanceDisplayComponent,
    MatIconButton,
    MatIcon,
    MatButton,
    MatProgressBar,
      MatTableModule,
    NgIf,
    DatePipe,
  ]
})
export class SavingsDetailComponent implements OnInit {
  titles = [
    'Savings Goal',
    'Saved so far',
    'Money to save',
    'You need to save',
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

  saving: Saving | undefined;
  savingId: number | undefined;
  savingTransactions: SavingTransaction[] = [];
  showAll: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private savingApiService: SavingApiService
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.savingId = Number(id);
      this.loadSaving();
    }
    this.loadSavingTransactions();

  }

  loadSavingTransactions(): void {
    this.savingApiService.getSavingsTransactionsBySavingId(this.savingId).subscribe(
        (data: SavingTransaction[]) => {
          this.savingTransactions = data;
        },
        error => {
          console.error('Error al cargar las transacciones de ahorro', error);
        }
    );
  }


  loadSaving() {
    if (this.savingId) {
      this.savingApiService.getSavingById(this.savingId).subscribe(
          (data: Saving) => {
            this.saving = data;
          },
          error => {
            console.error('Error al cargar el ahorro', error);
          }
      );
    }
  }

  get hasTransactions(): boolean {
    return this.savingTransactions && this.savingTransactions.length > 0;
  }

}
