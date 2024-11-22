import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {BalanceDisplayComponent} from "../../components/balance-display/balance-display.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {EarningsApiService} from "../../services/earnings-api.service";
import {ExpensesApiService} from "../../services/expenses-api.service";
import {TransactionApiService} from "../../../shared/services/transaction-api.service";
import {Earning} from "../../model/earning.entity";
import {Expense} from "../../model/expense.entity";
import {Transaction} from "../../../shared/model/transaction.entity";
import {NgForOf, NgIf} from "@angular/common";
import {WalletItemComponent} from "../../components/wallet-item/wallet-item.component";
import {ActivatedRoute} from "@angular/router";
import {Wallet} from "../../model/wallet.entity";
import {WalletApiService} from "../../../shared/services/wallet-api.service";
import {WalletFiltersComponent} from "../../components/wallet-filters/wallet-filters.component";
import { Category } from "../../../shared/model/categories.entity";
import { CategoryApiService } from "../../../shared/services/category-api.service";
import { Recurrent } from "../../../shared/model/recurrent.entity";
import { RecurrentApiService } from "../../../shared/services/recurrent-api.service";
import { MatDialog } from '@angular/material/dialog';
import {
  CreateTransactionDialogComponent
} from "../../components/create-transaction-dialog/create-transaction-dialog.component";

@Component({
  selector: 'app-wallet-view',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatTableModule, BalanceDisplayComponent,
    MatCheckboxModule, NgForOf, WalletItemComponent, MatTableModule, NgIf, WalletFiltersComponent],
  templateUrl: './wallet-view.component.html',
  styleUrl: './wallet-view.component.css'
})
export class WalletViewComponent implements OnInit {
  earnings: Earning[];
  expenses: Expense[];
  transactions: Transaction[];
  categories: Category[];
  recurrents: Recurrent[];
  walletId: number;
  wallet: Wallet;
  cashflow!: any[];

  totalBalance: number = 0;
  periodEarning: number = 0;
  periodExpense: number = 0;
  periodChange: number = 0;

  displayedColumns: string[] = ['category', 'amount', 'note', 'date', 'recurrent_id'];

  displayedTransactionColumns: string[] = ['transaction_type_id', 'wallet_id', 'amount', 'date', 'note', 'category'];

  constructor(
      private dialog: MatDialog,
      private categoryApiService: CategoryApiService,
      private recurrentApiService: RecurrentApiService,
      private earningApiService: EarningsApiService,
      private expensesApiService: ExpensesApiService,
      private transactionsApiService: TransactionApiService,
      private route: ActivatedRoute,
      private walletApiService: WalletApiService) {
    this.earnings = this.expenses = this.transactions = this.categories = this.recurrents = [];
    this.walletId = 0;
    this.wallet = new Wallet();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.walletId = params['id'];});

    this.walletApiService.getWalletById(this.walletId).subscribe(wallet => {
      this.wallet = wallet;
      this.totalBalance = wallet.balance;
    });

    this.earningApiService.getEarningsByWalletId(this.walletId).subscribe(earnings => {
      this.earnings = earnings;
     // this.periodEarning = earnings.reduce((acc, earning) => acc + earning.amount, 0);
      this.periodChange += this.periodEarning;
    });
    this.expensesApiService.getExpensesByWalletId(this.walletId).subscribe(expenses => {
      this.expenses = expenses;
   //   this.periodExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
      this.periodChange -= this.periodExpense;
    });
    this.transactionsApiService.getTransactionsByWalletId(this.walletId).subscribe(transactions => {
      this.transactions = transactions;
    });
    this.categoryApiService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.recurrentApiService.getAllRecurrents().subscribe(recurrents => {
        this.recurrents = recurrents;
    });

    this.cashflow = this.expenses.concat(this.earnings);
  }

  titles = [
    'Total Balance',
    'Total Period Change',
    'Total Period Expenses',
    'Total Period Income',
    'Period Income',
    'Period Expenses'
  ];

  getCategoryNameById(categoryId: number): string {
    return this.categories.find(category => category.id === categoryId)?.name || '';
  }
  getRecurrenceById(recurrenceId: number): string {
    return this.recurrents.find(recurrent => recurrent.id === recurrenceId)?.name || '';
  }

  onAddTransaction() {
    const dialogRef = this.dialog.open(CreateTransactionDialogComponent, {
      hasBackdrop: true,
      data: {
        categories: this.categories,
        walletId: this.walletId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.transactionsApiService.createTransaction(result).subscribe((transaction: Transaction) => {
            this.transactions.push(transaction);
        });
      }
    });
  }
}
