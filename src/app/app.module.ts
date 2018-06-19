import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemeImageComponent } from './meme-image/meme-image.component';
import { MemeFormComponent } from './meme-form/meme-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeImageComponent,
    MemeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
