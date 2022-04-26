import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './products/create/create.component';
import { DeleteComponent } from './products/delete/delete.component';
import { ListComponent } from './products/list/list.component';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './products/update/update.component';

const routes: Routes = [
  { path : "", redirectTo:'/home', pathMatch:'full'},
  { path : "home", component: HomeComponent},
  { path : "about", component: AboutComponent},
  { path : "login", component: LoginComponent},
  { path : "register", component: RegisterComponent},
  { path : "products", children :[
    { path:"" , component: ProductsComponent},
    { path:"list" , component: ListComponent},
    { path:"create" , component: CreateComponent},
    { path:"update" , component: UpdateComponent},
    { path:"delete" , component: DeleteComponent},
  ]},
  { path : "**", component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
