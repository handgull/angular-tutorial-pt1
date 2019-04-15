import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-row',
  templateUrl: './home-row.component.html',
  styleUrls: ['./home-row.component.css']
})
export class HomeRowComponent implements OnInit {
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }
}
