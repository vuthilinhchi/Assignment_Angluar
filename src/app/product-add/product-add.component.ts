import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product:Product={
    id:0,
    name:"",
    price:0,
    desc:"",
    image:""
  }

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
  OnAddItem(){
    this.productService.addProduct(this.product).subscribe(data=>{

    })

  }

}
