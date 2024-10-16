import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../common/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private baseUrl = 'http://localhost:8080/api/products';

    constructor(private httpClient: HttpClient) {}

    // Map the JSON data from Spring Data REST to Product array
    getProductList(): Observable<Product[]> {
        return this.httpClient
            .get<GetResponse>(this.baseUrl)
            .pipe(map((response) => response._embedded.products));
    }
}

// Unwraps the JSON from Spring Data REST _embedded entry
// This interface matches the structure of response object returned from /api/products
interface GetResponse {
    _embedded: {
        products: Product[];
    };
}
