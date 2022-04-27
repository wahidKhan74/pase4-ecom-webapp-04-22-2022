import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSrv : ProductAPIService) { }
  public productsList :any;

  ngOnInit(): void {

    this.productSrv.getProducts().subscribe((response: any) => {
      // console.log(response);
      this.productsList = response;
    });

  }

}
