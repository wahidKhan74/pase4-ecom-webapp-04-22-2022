import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSrv : ProductAPIService, private router:Router) { }
  public productsList :any;

  ngOnInit(): void {

  // get all products
   this.getAllproducts();

  }

  public getAllproducts() {
     this.productSrv.getProducts().subscribe((response: any) => {
      // console.log(response);
      this.productsList = response;
    });
  }

  //product update event
  public onEdit(product:any) {
    // console.log(product);
    this.router.navigateByUrl('/products/update',{ state : product});   
  }

  public onDelete(product:any) {
    // console.log(product);
    this.productSrv.deleteProduct(product).subscribe((response:any)=>{
      console.log("Product is delete successfully!.");
      // reload the products list
      this.getAllproducts();
    });
  }

  public onSearch(name:any) {
    if(name.value !=null || name.value !=""){
      this.productSrv.searchProducts(name.value).subscribe((response: any) => {
        // console.log(response);
        this.productsList = response;
      });
    } else {
      this.getAllproducts();
    }
  }

  public onAvailable(available:boolean){
    this.productSrv.filterProducts(available).subscribe((response: any) => {
      // console.log(response);
      this.productsList = response;
    });
  }
  public onAll(){
    this.getAllproducts();
  }
}
