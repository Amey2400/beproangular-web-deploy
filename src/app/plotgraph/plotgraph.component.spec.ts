import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotgraphComponent } from './plotgraph.component';

describe('PlotgraphComponent', () => {
  let component: PlotgraphComponent;
  let fixture: ComponentFixture<PlotgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
