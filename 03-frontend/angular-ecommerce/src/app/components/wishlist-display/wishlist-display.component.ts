import { Component, Input } from '@angular/core';
import { WishlistItem } from '../../common/wishlist-item';

@Component({
    selector: 'app-wishlist-display',
    templateUrl: './wishlist-display.component.html',
    styleUrl: './wishlist-display.component.css',
})
export class WishlistDisplayComponent {
    @Input() wishlistItems: WishlistItem[] = [];
}
