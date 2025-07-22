import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyaamiFromReactuive } from './dyaami-from-reactuive';

describe('DyaamiFromReactuive', () => {
  let component: DyaamiFromReactuive;
  let fixture: ComponentFixture<DyaamiFromReactuive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyaamiFromReactuive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyaamiFromReactuive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
