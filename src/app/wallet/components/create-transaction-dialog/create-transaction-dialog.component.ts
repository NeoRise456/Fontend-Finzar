import {Component, Input} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {Category} from "../../../shared/model/categories.entity";

@Component({
  selector: 'app-transaction-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule],
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

  constructor(private dialogRef: MatDialogRef<CreateTransactionDialogComponent>) {}

  onSubmit(): void {
    const transaction = {
      transaction_type_id: this.transactionType,
      amount: this.amount,
      date: new Date(),
      note: this.note,
      category_id: this.category_id
    };

    this.dialogRef.close(transaction);
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
