import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditing } from './inline-editing';

describe('InlineEditing', () => {
  let component: InlineEditing;
  let fixture: ComponentFixture<InlineEditing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineEditing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
