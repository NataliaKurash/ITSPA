import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandwichModule } from './sandwich/sandwich.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SandwichModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
