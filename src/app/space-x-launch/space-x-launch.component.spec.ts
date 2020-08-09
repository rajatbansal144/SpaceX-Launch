import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchComponent } from './space-x-launch.component';

describe('SpaceXLaunchComponent', () => {
  let component: SpaceXLaunchComponent;
  let fixture: ComponentFixture<SpaceXLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
