import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryItemCardsComponent } from './repository-item-cards.component';

describe('RepositoryItemCardsComponent', () => {
  let component: RepositoryItemCardsComponent;
  let fixture: ComponentFixture<RepositoryItemCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryItemCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryItemCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
