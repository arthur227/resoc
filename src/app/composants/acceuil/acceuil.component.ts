import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  test: string;
  
  constructor() { }

  ngOnInit() {
    this.test = "bely";
    
  }

}
