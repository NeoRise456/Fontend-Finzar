import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import {Wallet} from "../../wallet/model/wallet.entity";


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

  constructor(protected http: HttpClient) { }

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


  // Get User's Wallets
  getUserWallets(userId: any): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${this.basePath}/wallets?userId=${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  // Create wallet method
  createWallet(newWallet: any): Observable<T> {
    return this.http.post<T>(`${this.basePath}/wallets`, JSON.stringify(newWallet), this.httpOptions)
      .pipe(catchError(this.handleError));
  }





}

