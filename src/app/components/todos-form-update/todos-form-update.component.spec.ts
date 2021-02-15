import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFormUpdateComponent } from './todos-form-update.component';

describe('TodosFormUpdateComponent', () => {
  let component: TodosFormUpdateComponent;
  let fixture: ComponentFixture<TodosFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
