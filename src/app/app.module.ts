import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './card/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { CharLimitPipe } from './pipes/char-limit.pipe';

@NgModule({
  declarations: [AppComponent, PostsComponent, NavComponent, DetailsComponent, CharLimitPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
