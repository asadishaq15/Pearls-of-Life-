// src/app/pages/legacy/legacy.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegacyComponent } from './legacy.component';

describe('LegacyComponent', () => {
  let component: LegacyComponent;
  let fixture: ComponentFixture<LegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});