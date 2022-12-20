import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearBestMoviesComponent } from './year-best-movies.component';

describe('YearBestMoviesComponent', () => {
  let component: YearBestMoviesComponent;
  let fixture: ComponentFixture<YearBestMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearBestMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearBestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
