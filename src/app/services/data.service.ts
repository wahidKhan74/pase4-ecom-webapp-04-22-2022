import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
}
