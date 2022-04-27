import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : "", redirectTo:'/home', pathMatch:'full'},
  { path : "home", component: HomeComponent},
  { path : "about", component: AboutComponent},
  { path : "login", component: LoginComponent},
  { path : "register", component: RegisterComponent},
  { path : "products", loadChildren : ()=> import('./products/products.module').then(m=> m.ProductsModule)},
  { path : "orders", loadChildren: ()=> import("./orders/orders.module").then(m => m.OrdersModule)}
  // { path : "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
