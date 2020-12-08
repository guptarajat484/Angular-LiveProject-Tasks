import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyJsonComponent } from './dummy-json.component';

describe('DummyJsonComponent', () => {
  let component: DummyJsonComponent;
  let fixture: ComponentFixture<DummyJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
