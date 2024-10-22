import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ProductService } from './product.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '../common/product';

describe('ProductService', () => {
    let service: ProductService;
    let httpMock: HttpTestingController;
    let endpoint: 'http://localhost:8080/api/products';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ProductService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Ensure there are no outstanding HTTP requests
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should receive a list of products', fakeAsync(() => {
        const mockProducts: Product[] = [
            new Product(
                'SKU1',
                'Product 1',
                'Description 1',
                100,
                'http://example.com/image1.jpg',
                true,
                50,
                new Date(),
                new Date()
            ),
            new Product(
                'SKU2',
                'Product 2',
                'Description 2',
                200,
                'http://example.com/image2.jpg',
                false,
                20,
                new Date(),
                new Date()
            ),
        ];

        const mockResponse = {
            _embedded: {
                products: mockProducts,
            },
        };

        service.getProductList().subscribe((products) => {
            expect(products.length).toBe(2);
            expect(products).toEqual(mockProducts);
        });

        // Mock the HTTP request
        const req = httpMock.expectOne('http://localhost:8080/api/products');
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse); // Respond with mock data

        tick(); // Simulate the passage of time
    }));

    it('should handle an error response gracefully', () => {
        const errorMessage = '404 error';

        service.getProductList().subscribe({
            next: () => fail('expected an error, not products'),
            error: (error) => {
                expect(error).toBe(errorMessage);
            },
        });

        const req = httpMock.expectOne('http://localhost:8080/api/products');
        expect(req.request.method).toBe('GET');
        req.flush(
            { message: errorMessage },
            { status: 404, statusText: 'Not Found' }
        );
    });
});
