import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: string[];
  @Output() reloadGrid: EventEmitter<string[]> = new EventEmitter();

  ngOnInit() {
    this.categories = [];
  }

  add(category: string) {
    this.categories.push(category);
  }

  remove(index: number) {
    this.categories.splice(index, 1);
  }

  generate() {
    this.reloadGrid.emit(this.categories);
  }

}
