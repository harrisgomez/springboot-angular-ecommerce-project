import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistEditorComponent } from './wishlist-editor.component';

describe('WishlistEditorComponent', () => {
  let component: WishlistEditorComponent;
  let fixture: ComponentFixture<WishlistEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
