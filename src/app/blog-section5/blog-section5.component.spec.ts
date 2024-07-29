import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSection5Component } from './blog-section5.component';

describe('BlogSection5Component', () => {
  let component: BlogSection5Component;
  let fixture: ComponentFixture<BlogSection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSection5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
