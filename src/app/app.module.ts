import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './modules/post/post.component';
import { PostModule } from './modules/post/post.module';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, PostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
