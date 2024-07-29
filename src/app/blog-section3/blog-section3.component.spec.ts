import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSection3Component } from './blog-section3.component';

describe('BlogSection3Component', () => {
  let component: BlogSection3Component;
  let fixture: ComponentFixture<BlogSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
