import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IItem } from './item';
import { PARAMETERS } from '@angular/core/src/util/decorators';





@Injectable()
export class GroceryitemsService {

  private itemsUrl = 'http://localhost:5000/api/groceryitems';
  constructor( private _http: HttpClient) { }

  getItems(): Observable<IItem[]>{
    return this._http.get<IItem[]>(this.itemsUrl);
  }
  postTransaction(item : IItem): Observable<IItem[]> {
    return this._http.post<IItem[]>(this.itemsUrl, item);
  }
}
