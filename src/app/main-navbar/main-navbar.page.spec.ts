import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainNavbarPage } from './main-navbar.page';

describe('MainNavbarPage', () => {
  let component: MainNavbarPage;
  let fixture: ComponentFixture<MainNavbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainNavbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
