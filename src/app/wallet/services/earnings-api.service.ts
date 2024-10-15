import { Injectable } from '@angular/core';
import {Earning} from "../model/earning.entity";
import {BaseService} from "../../shared/services/base.service.service";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EarningsApiService extends BaseService<Earning> {

  resourceEndpoint: string = '/earnings';

  //get earnings by wallet id
  getEarningsByWalletId(walletId: any): Observable<Earning[]> {
    return this.http.get<Earning[]>(`${this.basePath}${this.resourceEndpoint}?walletId=${walletId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}
