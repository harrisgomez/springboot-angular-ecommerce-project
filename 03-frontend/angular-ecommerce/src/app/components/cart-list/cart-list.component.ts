import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrl: './cart-list.component.css',
})
export class CartListComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.listProducts();
    }

    listProducts() {
        this.productService.getProductList().subscribe((data) => {
          // Replace with add item to cart logic
            this.products = data;

        });
    }
}
