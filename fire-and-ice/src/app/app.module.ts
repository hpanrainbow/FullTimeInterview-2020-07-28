import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './components/splash/splash.component';
import { RequestrService } from './services/requestr.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './components/books/books/books.component';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    SplashComponent,
    BooksComponent,
    AppComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    RequestrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
