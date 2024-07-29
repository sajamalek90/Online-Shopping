import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSection6Component } from './blog-section6.component';

describe('BlogSection6Component', () => {
  let component: BlogSection6Component;
  let fixture: ComponentFixture<BlogSection6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSection6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
