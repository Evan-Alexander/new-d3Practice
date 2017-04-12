import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { D3Service } from 'd3-ng2-service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routes';
import { DataFormComponent } from './data-form/data-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
