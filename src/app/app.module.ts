import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './ComponentsAndDatabinding/game-control/game-control.component';
import { OddComponent } from './ComponentsAndDatabinding/odd/odd.component';
import { EvenComponent } from './ComponentsAndDatabinding/even/even.component';
import { ComsAndDbComponent } from './ComponentsAndDatabinding/coms-and-db/coms-and-db.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ComsAndDbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
