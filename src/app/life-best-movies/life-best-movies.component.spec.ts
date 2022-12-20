import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeBestMoviesComponent } from './life-best-movies.component';

describe('LifeBestMoviesComponent', () => {
  let component: LifeBestMoviesComponent;
  let fixture: ComponentFixture<LifeBestMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeBestMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeBestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
