import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentBoardComponent } from './create-content-board.component';

describe('CreateContentBoardComponent', () => {
  let component: CreateContentBoardComponent;
  let fixture: ComponentFixture<CreateContentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContentBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
