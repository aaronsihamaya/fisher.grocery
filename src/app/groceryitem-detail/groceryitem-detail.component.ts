import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../groceryitems/item';

@Component({
  selector: 'app-groceryitem-detail',
  templateUrl: './groceryitem-detail.component.html',
  styleUrls: ['./groceryitem-detail.component.css']
})
export class GroceryitemDetailComponent implements OnInit {

  @Input() item: IItem;

  constructor() { }

  ngOnInit() {
  }

}
