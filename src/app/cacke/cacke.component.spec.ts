import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CackeComponent } from './cacke.component';

describe('CackeComponent', () => {
  let component: CackeComponent;
  let fixture: ComponentFixture<CackeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CackeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CackeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
