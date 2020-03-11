import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WerkerDetailPage } from './werker-detail.page';

describe('WerkerDetailPage', () => {
  let component: WerkerDetailPage;
  let fixture: ComponentFixture<WerkerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WerkerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
