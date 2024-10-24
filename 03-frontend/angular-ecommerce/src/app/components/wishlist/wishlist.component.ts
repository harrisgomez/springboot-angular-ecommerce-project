import { Component } from '@angular/core';
import { WishlistItem } from '../../common/wishlist-item';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
    receivedWishlistItems: WishlistItem[] = [];

    onWishlistSubmitted(item: WishlistItem) {
        this.receivedWishlistItems.push(item);
    }
}
