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
  postItem(item : IItem): Observable<IItem[]> {
    return this._http.post<IItem[]>(this.itemsUrl, item);
  }
  putItem(item : IItem): Observable<IItem[]> {
    return this._http.put<IItem[]>(this.itemsUrl, item);
  }
  deleteItem(id : number): Observable<IItem[]> {
    var delId = id.toString();
    return this._http.delete<IItem[]>(this.itemsUrl + "/" + delId);
  }

}
