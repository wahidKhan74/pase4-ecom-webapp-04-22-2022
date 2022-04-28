import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  private url:string ='http://localhost:8090/products';

  constructor(private httpClient : HttpClient) { }

   // get all products
   public getProducts() {
    return this.httpClient.get(this.url);
   }

   // add one product
   public addProduct(product:any) {
    return this.httpClient.post(this.url,product);
   }

  // add one product
  public updateProduct(product:any) {
    return this.httpClient.put(this.url,product);
   }

  // delete one product
  public deleteProduct(product:any) {
    return this.httpClient.delete(this.url+"/"+product.id);
  }
}
