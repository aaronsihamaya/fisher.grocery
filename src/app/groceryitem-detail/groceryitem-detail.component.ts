import { FormControl } from '@angular/forms';
import { IItem } from '../groceryitems/item';
import { Component, OnInit, Input } from '@angular/core';
import { GroceryitemsService} from '../groceryitems/groceryitems.service';



@Component({
  selector: 'app-groceryitem-detail',
  templateUrl: './groceryitem-detail.component.html',
  styleUrls: ['./groceryitem-detail.component.css']
})
export class GroceryitemDetailComponent implements OnInit {

items: IItem[] = [];
selectedItem: IItem;
addId = new FormControl();
addName = new FormControl();
addBrand = new FormControl();
addPurchase = new FormControl();
addExpiry = new FormControl();
addNotes = new FormControl();

updateId = new FormControl();
updateName = new FormControl();
updateBrand = new FormControl();
updatePurchase = new FormControl();
updateExpiry = new FormControl();
updateNotes = new FormControl();

deleteId = new FormControl();

constructor(private _groceryitemsService : GroceryitemsService) { }


ngOnInit() {
  this._groceryitemsService.getItems()
  .subscribe(items => {
      this.items = items;
    },
    error => console.log(error)
  );
}

addItem() {
  var newId: number;
  var newName: string;
  var newBrand: string;
  var newPdate = new Date();
  var newEdate = new Date();
  var newNotes: string;

newId = this.addId.value;
newName = this.addName.value;
newBrand = this.addBrand.value;
newPdate = this.addPurchase.value;
newEdate = this.addExpiry.value;
newNotes = this.addNotes.value;

const newItem : IItem = {Id: newId, Name: newName, Brand: newBrand, Purchasedate: newPdate, Expirationdate: newEdate, Notes: newNotes};
this._groceryitemsService.postItem(newItem).subscribe(item => this.items.push(newItem));
}
updateItem() {
  var updateId: number;
  var updateName: string;
  var updateBrand: string;
  var updatePdate = new Date();
  var updateEdate = new Date();
  var updateNotes: string;

updateId = this.updateId.value;
updateName = this.updateName.value;
updateBrand = this.updateBrand.value;
updatePdate = this.updatePurchase.value;
updateEdate = this.updateExpiry.value;
updateNotes = this.updateNotes.value;

const updateItem : IItem = {Id: updateId, Name: updateName, Brand: updateBrand, Purchasedate: updatePdate, Expirationdate: updateEdate, Notes: updateNotes};
this._groceryitemsService.putItem(updateItem).subscribe(item => this.items.push(updateItem));
}
deleteItem() {
  var delId : number;
  delId = this.deleteId.value;
  this._groceryitemsService.deleteItem(delId).subscribe();
}
}
