import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service.service";
import {Saving} from "../model/saving.entity";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SavingApiService extends BaseService<Saving> {
  resourceEndpoint: string = '/savings';

  //get savings by user id
  getSavingsByUserId(userId: any) {
    return this.http.get<Saving[]>(`${this.basePath}${this.resourceEndpoint}?userId=${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}
