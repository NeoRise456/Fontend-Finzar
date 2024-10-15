import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service.service";
import {Expense} from "../model/expense.entity";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpensesApiService extends BaseService<Expense> {
  resourceEndpoint: string = '/expenses';

  //get expenses by wallet id
  getExpensesByWalletId(walletId: any): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.basePath}${this.resourceEndpoint}?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}
