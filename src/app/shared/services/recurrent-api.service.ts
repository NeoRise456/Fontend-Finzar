import { Injectable } from '@angular/core';
import {Recurrent} from "../model/recurrent.entity";
import {BaseService} from "./base.service.service";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecurrentApiService extends BaseService<Recurrent>{

  resourceEndpoint: string = '/recurrents';

  // Get all Recurrents
  getAllRecurrents() {
    return this.http.get<Recurrent[]>(`${this.basePath}${this.resourceEndpoint}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}
