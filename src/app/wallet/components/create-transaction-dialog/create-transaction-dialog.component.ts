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
import {Wallet} from "../../model/wallet.entity";
import {WalletApiService} from "../../../shared/services/wallet-api.service";
import {AuthenticationService} from "../../../iam/services/authentication.service";

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
  destinationWalletId: number = 0;
  currentUserId: number = 0;
  categoryId: number = 0;
  wallets: Wallet[] = [];

  constructor(private dialogRef: MatDialogRef<CreateTransactionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { categories: Category[], walletId: number},
              private walletService: WalletApiService, private authenticationService: AuthenticationService) {
    this.categories = data.categories;
    this.walletId = data.walletId;
  }

  ngOnInit() {
    this.authenticationService.currentUserId.subscribe(userId => {
      this.currentUserId = userId
      this.loadWallets()
    })
  }

  loadWallets() {
    this.walletService.getWalletsByUserId(this.currentUserId).subscribe((wallets: Wallet[]) => {
      this.wallets = wallets;
    });
  }

  onSubmit(): void {
    const transaction = {
      sourceWalletId: this.walletId,
      note: this.note,
      amount: this.amount,
      transactionDate: new Date().toISOString().split('T')[0],
      destinationWalletId: this.destinationWalletId,
      categoryId: this.categoryId // Include categoryId in the transaction
    };
    console.log(transaction);

    this.dialogRef.close(transaction);
  }

  close(): void {
    this.dialogRef.close(null);
  }
}