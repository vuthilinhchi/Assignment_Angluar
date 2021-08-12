import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: Product
  constructor(private productService: ProductService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getInfor();
  }
  getInfor(){
    this.activatedRouter.params.subscribe(param=>{
       this.productService.getInfor(param.id).subscribe(data=>{
         this.product = data
       })
    })
  }
  onUpdateItem(){
    this.productService.updateProduct(this.product).subscribe(data=>{
        alert('sửa thành công!');
        this.router.navigateByUrl('/')
    })
  }
}
