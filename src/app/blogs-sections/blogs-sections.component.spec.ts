import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSectionsComponent } from './blogs-sections.component';

describe('BlogsSectionsComponent', () => {
  let component: BlogsSectionsComponent;
  let fixture: ComponentFixture<BlogsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
