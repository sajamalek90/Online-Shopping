import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSection2Component } from './blog-section2.component';

describe('BlogSection2Component', () => {
  let component: BlogSection2Component;
  let fixture: ComponentFixture<BlogSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
