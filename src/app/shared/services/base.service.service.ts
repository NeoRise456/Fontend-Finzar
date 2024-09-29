import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import {Wallet} from "../../wallet/models/wallet.entity";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.apiUrl}`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }


  // Get User by ID
  getUserById(userId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/users/${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get User's Wallets
  getUserWallets(userId: any): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${this.basePath}/wallets?userId=${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Wallet by ID
  getWalletById(walletId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/wallets/${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Wallet Earnings
  getWalletEarnings(walletId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/earnings?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Wallet Expenses
  getWalletExpenses(walletId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/expenses?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Wallet Savings
  getWalletSavings(walletId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/savings?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Wallet Budgets
  getWalletBudgets(walletId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/budgets?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Wallet Transactions
  getWalletTransactions(walletId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/transactions?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get Transaction by ID
  getTransactionById(transactionId: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/transactions/${transactionId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get All Categories
  getAllCategories(): Observable<T> {
    return this.http.get<T>(`${this.basePath}/categories`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get All Recurrents
  getAllRecurrents(): Observable<T> {
    return this.http.get<T>(`${this.basePath}/recurrents`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get All Transaction Types
  getAllTransactionTypes(): Observable<T> {
    return this.http.get<T>(`${this.basePath}/transaction_types`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Create wallet method
  createWallet(newWallet: any): Observable<T> {
    return this.http.post<T>(`${this.basePath}/wallets`, JSON.stringify(newWallet), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Create transaction method
  createTransaction(newTransaction: any): Observable<T> {
    return this.http.post<T>(`${this.basePath}/transactions`, JSON.stringify(newTransaction), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  createSaving(newSaving: any): Observable<T> {
    return this.http.post<T>(`${this.basePath}/savings`, JSON.stringify(newSaving), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteSaving(savingId: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}/savings/${savingId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}

