import { TestBed, inject } from '@angular/core/testing';

import { GroceryitemsService } from './groceryitems.service';

describe('GroceryitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryitemsService]
    });
  });

  it('should be created', inject([GroceryitemsService], (service: GroceryitemsService) => {
    expect(service).toBeTruthy();
  }));
});
