
import { Product } from './../products';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = [];

  constructor(private productservice : ProductService) { }

  ngOnInit() {
    this.getProducts();
    
  }

  getProducts(): void{
    this.productservice.getProducts()
    .subscribe(data => {this.products = data['products'];
      console.log(this.products);},
      err => console.error(err)
    );
  }
    
      
  

}
