import { Component } from '@angular/core';
import { BalancePiechartComponent } from "../../../wallet/components/balance-piechart/balance-piechart.component";
import { MatCardModule } from "@angular/material/card";
import { BalanceDisplayComponent } from "../../../wallet/components/balance-display/balance-display.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { SavingDeleteComponent } from "../../components/saving-delete/saving-delete.component";

@Component({
  selector: 'app-savings-detail',
  standalone: true,
  templateUrl: './savings-detail.component.html',
  styleUrls: ['./savings-detail.component.css'],
  imports: [
    BalancePiechartComponent,
    MatCardModule,
    BalanceDisplayComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SavingDeleteComponent
  ]
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

  currentSavingId: number=34;

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  setCurrentSavingId(savingId: number): void {
    this.currentSavingId = savingId;
  }

  onDeleteSaving(): void {
    if (this.currentSavingId === null) {
      console.error('No saving ID set for deletion');
      return;
    }

    const dialogRef = this.dialog.open(SavingDeleteComponent, {
      data: { savingId: this.currentSavingId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed the deletion
        this.deleteSavingFromDb(this.currentSavingId);
      }
    });
  }

  private deleteSavingFromDb(savingId: number): void {
    this.http.delete(`http://localhost:3000/savings/${savingId}`).subscribe(
        () => {
          console.log('Saving deleted successfully');
        },
        error => {
          console.error('Error deleting saving', error);
        }
    );
  }
}
