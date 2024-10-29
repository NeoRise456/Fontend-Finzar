import {Component, Inject, Input} from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {Category} from "../../../shared/model/categories.entity";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-transaction-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule, MatOption, MatSelect, NgForOf, ReactiveFormsModule],
  templateUrl: './create-transaction-dialog.component.html',
  styleUrl: './create-transaction-dialog.component.css'
})
export class CreateTransactionDialogComponent {
  @Input() categories!: Category[];
  @Input() walletId!: number;
  note: string = '';
  amount: number = 0;
  transactionType: string = '';
  category_id: number = 0;

  constructor(private dialogRef: MatDialogRef<CreateTransactionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { categories: Category[], walletId: number}) {
    this.categories = data.categories;
    this.walletId = data.walletId;
  }

  onSubmit(): void {
    const transaction = {
      transaction_type_id: this.transactionType,
      wallet_id: this.walletId,
      amount: this.amount,
      date: new Date().toISOString().split('T')[0],
      note: this.note,
      category_id: this.category_id
    };
    console.log(transaction);

    this.dialogRef.close(transaction);
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
