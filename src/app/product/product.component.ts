import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Product[]
  data!:Product;
  constructor(private productService : ProductService) { }

  ngOnInit() {
   this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products=data
    })
  }
  onRemoveItem(id:number){
    this.productService.removeProduct(id).subscribe(data=>{
      this.products=this.products!.filter(item=>item.id != data.id);
    })
  }

}
