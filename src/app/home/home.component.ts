import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  height: string;
  people: {
    name: string,
    height: string
  }[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToPeople() {
    this.people.push({
      name: this.name,
      height: this.height
    });
  }
}
