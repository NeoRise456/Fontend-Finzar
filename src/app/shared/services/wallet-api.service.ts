import { Injectable } from '@angular/core';
import {Wallet} from "../../wallet/model/wallet.entity";
import {BaseService} from "./base.service.service";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WalletApiService extends BaseService<Wallet> {
  resourceEndpoint: string = '/wallets';

  //get wallet by wallet id
  getWalletById(walletId: any) {
    return this.http.get<Wallet>(`${this.basePath}${this.resourceEndpoint}/${walletId}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

  //get all wallets by user id
  getWalletsByUserId(userId: any) {
    return this.http.get<Wallet[]>(`${this.basePath}${this.resourceEndpoint}/user/${userId}`, this.httpOptions)
        .pipe(catchError(this.handleError));
  }

}
