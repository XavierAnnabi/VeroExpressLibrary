import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeroexpressComponent } from './veroexpress.component';

describe('VeroexpressComponent', () => {
  let component: VeroexpressComponent;
  let fixture: ComponentFixture<VeroexpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeroexpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeroexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
