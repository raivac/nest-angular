import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
      },
      (err) => console.log(err)
    );
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        this.getProducts();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
