import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

   // data variables
   public username: string = "johnsmith";
   public age: number = 40;
   public isActive: boolean = false;

  public bgOne:string = 'bg-one';
  public bgTwo:string = 'bg-two';
  public bgThree:string = 'bg-three';
   
  constructor() { }

  ngOnInit(): void {
  }

}
