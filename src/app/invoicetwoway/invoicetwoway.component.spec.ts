import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicetwowayComponent } from './invoicetwoway.component';

describe('InvoicetwowayComponent', () => {
  let component: InvoicetwowayComponent;
  let fixture: ComponentFixture<InvoicetwowayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicetwowayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicetwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
