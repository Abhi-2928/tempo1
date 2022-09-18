import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { AlertComponent } from "./components/alert/alert.component";
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { ReadbookComponent } from './components/readbook/readbook.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SubsbookComponent } from './components/subsbook/subsbook.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { ViewsubsbooksComponent } from './components/viewsubsbooks/viewsubsbooks.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomeGuard } from "../welcome.guard";

const routes:Routes = [
    {path: "login", component: LoginComponent },
     {path: "welcome", component: WelcomeComponent, canActivate: [WelcomeGuard] },
    {path: "allbooks", component: AllbooksComponent},
   {path: "subscribe", component: SubsbookComponent},
   {path: "viewallsubsbooks", component: ViewsubsbooksComponent},
    {path: "readbook", component: ReadbookComponent},
    {path: "searchbooks", component: SearchbooksComponent},
     {path: "createbook", component: CreatebookComponent},
     {path: "updatebook", component: UpdatebookComponent},
    {path: "signup", component: SignUpComponent}
  ]
  
  @NgModule({
    declarations: [
      LoginComponent,
      AlertComponent,
      AllbooksComponent,
      CreatebookComponent,
      ReadbookComponent,
      SearchbooksComponent,
      SignUpComponent,
      SubsbookComponent,
      UpdatebookComponent,
      ViewsubsbooksComponent,
      WelcomeComponent
    //   WelcomeComponent,
    //   AllbooksComponent,
    //   SubsbookComponent,
    //   ViewsubsbooksComponent,
    //   ReadbookComponent,
    //   SearchbooksComponent,
    //   CreatebookComponent,
    //   UpdatebookComponent,
    //   AlertModalComponent,
    //   SignUpComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ]
  })
  export class UserModule { }