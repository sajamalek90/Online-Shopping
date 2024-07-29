import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSection4Component } from './blog-section4.component';

describe('BlogSection4Component', () => {
  let component: BlogSection4Component;
  let fixture: ComponentFixture<BlogSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
