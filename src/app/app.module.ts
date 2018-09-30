import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      AppComponent,
      BoardComponent,
      CategoryListComponent
   ],
   imports: [
      FormsModule,
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
