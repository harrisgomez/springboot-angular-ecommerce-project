import { WishlistItem } from './wishlist-item';

describe('WishlistItem', () => {
    const itemData = {
        name: 'Sample wishlist item',
        description: 'This is a sample wishlist item description',
        quantity: 10,
    };
    const item = new WishlistItem(
        itemData.name,
        itemData.description,
        itemData.quantity
    );

    it('should create an instance', () => {
        expect(item).toBeTruthy();
    });
});
