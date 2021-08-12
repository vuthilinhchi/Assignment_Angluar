import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable()
export class ProductService {

constructor(private http : HttpClient) { }
API : string = `https://610bf56f66dd8f0017b76bb6.mockapi.io/testproduct`
getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
}
getInfor(id:number):Observable<Product>{
    return this.http.get<Product>(`${(this.API)}/${id}`);
}
removeProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.API}/${id}`);
}
addProduct(item:Product):Observable<Product>{
    return this.http.post<Product>(this.API,item)
}
updateProduct(item: Product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${item.id}`, item)
  }
}


