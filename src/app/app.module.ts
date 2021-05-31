import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './ComponentsAndDatabinding/game-control/game-control.component';
import { OddComponent } from './ComponentsAndDatabinding/odd/odd.component';
import { EvenComponent } from './ComponentsAndDatabinding/even/even.component';
import { ComsAndDbComponent } from './ComponentsAndDatabinding/coms-and-db/coms-and-db.component';
import { RlComponent } from './RoutingLesson/rl.component';
import { UsersComponent } from './RoutingLesson/users/users.component';
import { UserComponent } from './RoutingLesson/users/user/user.component';
import { ServerComponent } from './RoutingLesson/servers/server/server.component';
import { ServersComponent } from './RoutingLesson/servers/servers.component';
import { ServersService } from './RoutingLesson/servers/servers.service';
import { EditServerComponent } from './RoutingLesson/servers/edit-server/edit-server.component';
import { HomeComponent } from './RoutingLesson/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ComsAndDbComponent,
    RlComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    ServersComponent,
    EditServerComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
