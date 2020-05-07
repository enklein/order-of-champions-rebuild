import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordPlugComponent } from './discord-plug.component';

describe('DiscordPlugComponent', () => {
  let component: DiscordPlugComponent;
  let fixture: ComponentFixture<DiscordPlugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordPlugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordPlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
