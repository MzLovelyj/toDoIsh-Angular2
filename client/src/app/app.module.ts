import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { CardService } from './services/card.service';
import { ListService } from './services/list.service';
import { SessionService } from './services/session.service';
import { ToDoComponent } from './to-do/to-do.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListsPageComponent,
    LogInComponent,
    SignUpComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CardService,
    ListService,
    SessionService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
