import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../groceryitems/item';
import { GroceryitemsService } from '../groceryitems/groceryitems.service';

@Component({
  selector: 'app-groceryitems',
  templateUrl: './groceryitems.component.html',
  styleUrls: ['./groceryitems.component.css']
})
export class GroceryitemsComponent implements OnInit {

items: IItem[] = [];
selectedItem: IItem;

  constructor(private _groceryitemsService: GroceryitemsService) { }

  ngOnInit() {
    this._groceryitemsService.getItems()
    .subscribe(items => {
        this.items = items;
      },
      error => console.log(error)
    );
  }

  onSelect(item: IItem): void {
    this.selectedItem = item;
  }
  
}
