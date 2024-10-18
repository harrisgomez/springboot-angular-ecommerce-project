import { Component, EventEmitter, Output } from '@angular/core';
import { WishlistItem } from '../../common/wishlist-item';

@Component({
    selector: 'app-wishlist-editor',
    templateUrl: './wishlist-editor.component.html',
    styleUrl: './wishlist-editor.component.css',
})
export class WishlistEditorComponent {
    wishedItemName!: string;
    wishedItemDescription!: string;
    wishedItemQuanity!: number;

    @Output() wishlistSubmitted = new EventEmitter<WishlistItem>();

    submitWishlist() {
        const wishlistItem: WishlistItem = {
            name: this.wishedItemName,
            description: this.wishedItemDescription,
            quantity: this.wishedItemQuanity,
        };

        this.wishlistSubmitted.emit(wishlistItem);
    }
}
