import { Injectable } from '@angular/core';
import {BaseService} from "./base.service.service";
import {Category} from "../model/categories.entity";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService extends BaseService<Category>{
  resourceEndpoint: string = '/categories';

  // Get all Categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.basePath}${this.resourceEndpoint}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}
