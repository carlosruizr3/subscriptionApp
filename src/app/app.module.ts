import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/forms/users/users.component';
import { DevicesComponent } from './pages/forms/devices/devices.component';
import { BrandComponent } from './pages/forms/brand/brand.component';
import { ModelComponent } from './pages/forms/model/model.component';
import { ClientsComponent } from './pages/forms/clients/clients.component';
import { HeaderComponent } from './pages/header/header.component';
import { LocationsComponent } from './pages/forms/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    DevicesComponent,
    BrandComponent,
    ModelComponent,
    ClientsComponent,
    HeaderComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
