import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // data variables
  public username:string ="johnsmith";
  public age:number = 40;
  public isActive:boolean = true;
  
  public imagePath1:string = "assets/img/banner.jpg";
  public imagePath2:string = "assets/img/product.jpg";

  public account = {
    id: 10001,
    name:"john snow",
    balance:35646.6756,
    email:'joh.snow@gmail.com'
  };
  public companies:string[] = ['Google',"Microsoft","Infosys","Wipro","Dell"];



  constructor() { }

  ngOnInit(): void {
  }

}
