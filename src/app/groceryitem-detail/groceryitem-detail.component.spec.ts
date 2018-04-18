import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryitemDetailComponent } from './groceryitem-detail.component';

describe('GroceryitemDetailComponent', () => {
  let component: GroceryitemDetailComponent;
  let fixture: ComponentFixture<GroceryitemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryitemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryitemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
