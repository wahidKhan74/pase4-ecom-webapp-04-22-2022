import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  // style values
  public colorA = 'rgb(227 135 32)';
  public borderA = '2px solid #6f1a11';
  public paddingA = '20px';


  public colorB = 'rgb(227 15 202)';
  public borderB = '2px solid #611a11';
  public paddingB = '20px';


  // data variables
  public username: string = "johnsmith";
  public age: number = 40;
  public isActive: boolean = false;

  public imagePath1: string = "assets/img/banner.jpg";
  public imagePath2: string = "assets/img/product.jpg";

  public account = {
    id: 10001,
    name: "john snow",
    balance: 35646.6756,
    email: 'joh.snow@gmail.com'
  };
  public companies: string[] = ['Google', "Microsoft", "Infosys", "Wipro", "Dell"];

  constructor() { }

  ngOnInit(): void {
  }

}
