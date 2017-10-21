import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  power:number;
  constructor() { }

  ngOnInit() {
    this.power=0;
  }

}
