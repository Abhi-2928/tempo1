import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

const route:Routes = [
  {path:"home", component:HomeComponent},
  {path:"*",redirectTo: "home"}
]
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent],
  imports: [BrowserModule,RouterModule.forRoot(route), UserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
