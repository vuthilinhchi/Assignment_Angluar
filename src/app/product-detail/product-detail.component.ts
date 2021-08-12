import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product! : Product
  constructor(private productService:ProductService,private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    this.getInfor()
  }
  getInfor(){
    this.activateRouter.params.subscribe(params=>{
      this.productService.getInfor(params.id).subscribe(data=>{
        this.product=data

      })
    })

  }

}
