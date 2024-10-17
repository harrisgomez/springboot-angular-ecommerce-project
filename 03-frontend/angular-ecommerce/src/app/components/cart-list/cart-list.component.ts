import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { Product } from '../../common/product';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrl: './cart-list.component.css',
})
export class CartListComponent implements OnInit {
    cartItems: Product[] = [];

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.sharedService.currentCartItems.subscribe((items) => {
            this.cartItems = items;
        });
    }
}
