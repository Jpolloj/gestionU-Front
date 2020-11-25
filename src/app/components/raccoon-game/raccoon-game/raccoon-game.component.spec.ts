import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaccoonGameComponent } from './raccoon-game.component';

describe('RaccoonGameComponent', () => {
  let component: RaccoonGameComponent;
  let fixture: ComponentFixture<RaccoonGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaccoonGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaccoonGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
