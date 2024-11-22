import { Injectable } from '@angular/core';
import {BaseService} from "./base.service.service";
import {Transaction} from "../model/transaction.entity";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService extends BaseService<Transaction> {

  resourceEndpoint: string = '/transactions';

  //get transactions by user id (probably not used)
  getTransactionsByUserId(userId: any) {
    return this.http.get<Transaction[]>(`${this.basePath}${this.resourceEndpoint}/${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  //Get transactions by wallet id
  getTransactionsByWalletId(walletId: any) {
    return this.http.get<Transaction[]>(`${this.basePath}${this.resourceEndpoint}/${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  //Create transaction
  createTransaction(transaction: any) {
      return this.http.post<Transaction>(`${this.basePath}${this.resourceEndpoint}`, JSON.stringify(transaction), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

    //Create transaction income
    createTransactionIncome(transaction: any, incomeId: any) {
        return this.http.post<Transaction>(`${this.basePath}${this.resourceEndpoint}/incomes/${incomeId}`, JSON.stringify(transaction), this.httpOptions)
        .pipe(catchError(this.handleError));
    }

    //Create transaction expense
    createTransactionExpense(transaction: any, expenseId: any) {
        return this.http.post<Transaction>(`${this.basePath}${this.resourceEndpoint}/expenses/${expenseId}`, JSON.stringify(transaction), this.httpOptions)
        .pipe(catchError(this.handleError));
    }

}
