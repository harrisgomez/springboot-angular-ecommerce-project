import { Component } from '@angular/core';
import { WishlistItem } from '../../common/wishlist-item';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
    receivedWishlistItem: WishlistItem | null = null;

    onWishlistSubmitted(item: WishlistItem) {
        console.log(item);
        
        this.receivedWishlistItem = item;
    }
}
