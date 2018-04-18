import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IItem } from './item';




@Injectable()
export class GroceryitemsService {

  private itemsUrl = "http://localhost:5000/api/items";
  constructor( private _http: HttpClient) { }

  getItems(): Observable<IItem[]>{
    return this._http.get<IItem[]>(this.itemsUrl);
  }
}
