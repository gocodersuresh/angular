import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestclientpostComponent } from './restclientpost.component';

describe('RestclientpostComponent', () => {
  let component: RestclientpostComponent;
  let fixture: ComponentFixture<RestclientpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestclientpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestclientpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
