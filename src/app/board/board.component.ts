import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squaresGrid: BoardSquare[][] =  [[]];
  gridSize: number;
  bingo: boolean;

  ngOnInit() {
    this.gridSize = 5;
    this.squaresGrid =  [[], [], [], [], []];
    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        this.squaresGrid[y][x] = new BoardSquare('X:' + x + ' and Y:' + y);
      }
    }
  }

  reloadGrid(event: string[]) {
    // TODO: make this not do random if there is more then 25 elements
    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        this.squaresGrid[y][x] = new BoardSquare(event[Math.floor(Math.random() * event.length)]);
      }
    }
    this.bingo = false;
  }

  select(x: number, y: number) {
    this.squaresGrid[x][y].invertSelected();
    this.bingo = this.checkBingo();
  }

  checkBingo(): boolean {
    // Check rows
    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        if (!this.squaresGrid[y][x].selected) {
          break;
        }
        if (y === this.gridSize - 1) {
          return true;
        }
      }
    }

    // Check columns
    for (let y = 0; y < this.gridSize; y++) {
      for (let x = 0; x < this.gridSize; x++) {
        if (!this.squaresGrid[y][x].selected) {
          break;
        }
        if (x === this.gridSize - 1) {
          return true;
        }
      }
    }

    // Check diagnols
    for (let i = 0; i < this.gridSize; i++) {
      if (!this.squaresGrid[i][i].selected) {
        break;
      }
      if (i === this.gridSize - 1) {
        return true;
      }
    }
    for (let i = 0; i < this.gridSize; i++) {
      if (!this.squaresGrid[i][this.gridSize - 1 - i].selected) {
        break;
      }
      if (i === this.gridSize - 1) {
        return true;
      }
    }
    return false;
  }

}

class BoardSquare {
  name: string;
  selected: boolean;

  constructor(name: string) {
    this.name = name;
    this.selected = false;
  }

  invertSelected(): void {
    this.selected = !this.selected;
  }
}
