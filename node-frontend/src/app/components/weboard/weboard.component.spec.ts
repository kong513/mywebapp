import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeboardComponent } from './weboard.component';

describe('WeboardComponent', () => {
  let component: WeboardComponent;
  let fixture: ComponentFixture<WeboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
