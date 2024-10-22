import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductListComponent } from './product-list.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistEditorComponent } from '../wishlist-editor/wishlist-editor.component';
import { WishlistDisplayComponent } from '../wishlist-display/wishlist-display.component';
import { FormsModule } from '@angular/forms';

describe('ProductListComponent', () => {
    let component: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, FormsModule],
            declarations: [
                ProductListComponent,
                WishlistComponent,
                WishlistEditorComponent,
                WishlistDisplayComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
