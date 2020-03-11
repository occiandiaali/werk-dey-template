import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WerkersPage } from './werkers.page';

describe('WerkersPage', () => {
  let component: WerkersPage;
  let fixture: ComponentFixture<WerkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WerkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
