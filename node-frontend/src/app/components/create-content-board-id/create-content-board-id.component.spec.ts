import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentBoardIdComponent } from './create-content-board-id.component';

describe('CreateContentBoardIdComponent', () => {
  let component: CreateContentBoardIdComponent;
  let fixture: ComponentFixture<CreateContentBoardIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContentBoardIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContentBoardIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
