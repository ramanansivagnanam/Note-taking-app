import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { MakenotesComponent } from "./makenotes/makenotes.component";

const appRoute : Routes = [
    {path: '', redirectTo: 'welcome',pathMatch:'full'},
    {path: 'welcome',component:WelcomeComponent},
    {path: 'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'notes',component:MakenotesComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}