import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivationsComponent } from './nagivations.component';

describe('NagivationsComponent', () => {
  let component: NagivationsComponent;
  let fixture: ComponentFixture<NagivationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagivationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
