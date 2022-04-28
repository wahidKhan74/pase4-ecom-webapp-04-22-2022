import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  private url:string ='http://localhost:8090/products';
  private searchUrl:string ='http://localhost:8090/search?name=';
  private filterUrl:string ='http://localhost:8090/filter/product?available=';

  constructor(private httpClient : HttpClient) { }

   // get all products
   public getProducts() {
    return this.httpClient.get(this.url);
   }

   // get all products
   public searchProducts(name:any) {
    return this.httpClient.get(this.searchUrl+name);
   }

   // filter all products
   public filterProducts(available:boolean) {
    return this.httpClient.get(this.filterUrl+available);
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
