import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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


  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
