import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAPI } from './post-api';

describe('PostAPI', () => {
  let component: PostAPI;
  let fixture: ComponentFixture<PostAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAPI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
