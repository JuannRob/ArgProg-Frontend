import { GuardGuard } from "./services/guard.guard";
import { LoginComponent } from "./components/login/login.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'user', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'user', pathMatch:'full'},
  {path:'user/edit', component:PortfolioComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
