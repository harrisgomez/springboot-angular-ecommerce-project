import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { WishlistComponent } from './wishlist.component';
import { WishlistEditorComponent } from '../wishlist-editor/wishlist-editor.component';
import { WishlistDisplayComponent } from '../wishlist-display/wishlist-display.component';

describe('WishlistComponent', () => {
    let component: WishlistComponent;
    let fixture: ComponentFixture<WishlistComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                WishlistComponent,
                WishlistEditorComponent,
                WishlistDisplayComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(WishlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
