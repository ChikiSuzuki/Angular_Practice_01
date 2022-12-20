import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoviesButtonComponent } from './add-movies-button.component';

describe('AddMoviesButtonComponent', () => {
  let component: AddMoviesButtonComponent;
  let fixture: ComponentFixture<AddMoviesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoviesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMoviesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
