import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leftmenu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  public is_open:Boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
