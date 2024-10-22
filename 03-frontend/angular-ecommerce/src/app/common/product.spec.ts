import { Product } from './product';

describe('Product', () => {
    const productData = {
        sku: 'SKU123',
        name: 'Sample Product',
        description: 'This is a sample product description.',
        unitPrice: 99.99,
        imageUrl: 'http://example.com/image.jpg',
        active: true,
        unitsInStock: 10,
        dateCreated: new Date(),
        lastUpdated: new Date(),
    };
    const product = new Product(
        productData.sku,
        productData.name,
        productData.description,
        productData.unitPrice,
        productData.imageUrl,
        productData.active,
        productData.unitsInStock,
        productData.dateCreated,
        productData.lastUpdated
    );

    it('should create an instance', () => {
        expect(product).toBeTruthy();
    });
});
