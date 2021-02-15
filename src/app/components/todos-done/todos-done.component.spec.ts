import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDoneComponent } from './todos-done.component';

describe('TodosDoneComponent', () => {
  let component: TodosDoneComponent;
  let fixture: ComponentFixture<TodosDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
