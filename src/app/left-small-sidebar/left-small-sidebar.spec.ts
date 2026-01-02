import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSmallSidebar } from './left-small-sidebar';

describe('LeftSmallSidebar', () => {
  let component: LeftSmallSidebar;
  let fixture: ComponentFixture<LeftSmallSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSmallSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSmallSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
