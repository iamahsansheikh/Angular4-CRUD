import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCT_ITEMS} from './productData';
import {findIndex} from 'lodash';

@Injectable()
export class ProductService{

private productItems = PRODUCT_ITEMS;

    getProductsData(): Product[]{

        return this.productItems;
    }


    addProduct(product: Product) {
        this.productItems.push(product);
    }

    updateProduct(product: Product) {
        let index = findIndex(this.productItems, (p: Product) => {
            return p.id === product.id;
        });
        this.productItems[index] = product;
    }

    deleteProduct(product:Product){
        this.productItems.splice(this.productItems.indexOf(product),1);
    }



    // getProducts(): Product[]{
    //     return[{
    //         id: 1,
    //         name: 'Laptop',
    //         description: 'Apple Laptop',
    //         price: 1000.00
    //     },{
    //         id: 2,
    //         name: 'TV',
    //         description: 'Samsung 4K',
    //         price: 1500.00
    //     },{
    //         id: 3,
    //         name: 'Computer',
    //         description: 'Desktop Machine',
    //         price: 500.00
    //     }]
    }

