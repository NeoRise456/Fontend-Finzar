import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-wallet-dialog',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, FormsModule, MatInputModule,
    MatButtonModule, MatDialogModule, NgIf
  ],
  templateUrl: './create-wallet-dialog.component.html',
  styleUrl: './create-wallet-dialog.component.css'
})
export class CreateWalletDialogComponent {
  walletName: string = '';
  initialBalance = 0;


  constructor(private dialogRef: MatDialogRef<CreateWalletDialogComponent>) {}

  onSubmit(): void {
    if (this.walletName && this.initialBalance >= 0) {
      this.dialogRef.close({
        walletName: this.walletName,
        initialBalance: this.initialBalance
      });
    }
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
