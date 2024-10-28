import { Component, OnInit } from '@angular/core';
import {BalancePiechartComponent} from "../../../wallet/components/balance-piechart/balance-piechart.component";
import {MatCardModule} from "@angular/material/card";
import {BalanceDisplayComponent} from "../../../wallet/components/balance-display/balance-display.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ActivatedRoute, Router} from "@angular/router";
import {SavingApiService} from "../../services/saving-api.service";
import {Saving} from "../../model/saving.entity";
import {SavingTransaction} from "../../model/saving-transaction.entity";
import { MatTableModule } from '@angular/material/table';
import {MatProgressBar} from "@angular/material/progress-bar";
import {DatePipe, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {SavingDeleteComponent} from "../../components/saving-delete/saving-delete.component";
import {SavingEditComponent} from "../../components/saving-edit/saving-edit.component";
import { Router } from '@angular/router';

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
      private savingApiService: SavingApiService,
      private router: Router,
      private dialog: MatDialog
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

    openDeleteDialog(): void {
        const dialogRef = this.dialog.open(SavingDeleteComponent, {
            data: { savingId: this.savingId }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('Saving deleted from dialog');
                this.router.navigate(['/savings']);
            }
        });
    }
  openEditDialog(saving: Saving) {
    const dialogRef = this.dialog.open(SavingEditComponent, {
      data: saving
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateSaving(this.savingId, result);
      }
    });
  }

  updateSaving(id: number | undefined, saving: Saving) {
    if (id !== undefined) {
      this.savingApiService.updateSaving(id, saving).subscribe(
          updatedSaving => {
            console.log('Saving updated:', updatedSaving);
            this.loadSaving();
          },
          error => {
            console.error('Error updating saving:', error);
          }
      );
    }
  }
  get hasTransactions(): boolean {
    return this.savingTransactions && this.savingTransactions.length > 0;
  }
}

