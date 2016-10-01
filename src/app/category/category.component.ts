import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CommonService],
})
export class CategoryComponent implements OnInit {

    private cats = [];
    private isLoading = true;

  constructor(private commonapi: CommonService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.commonapi.getCats().subscribe(
      data => this.cats = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
