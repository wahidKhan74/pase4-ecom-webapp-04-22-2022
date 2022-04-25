import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  public email:string ="";
  public message:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  public onEmail($event:any) { 
    console.log($event.target.value);
    this.email = $event.target.value;
  }

}
