import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : "orders", children :[
    { path:"" , component: OrdersComponent},
    { path:"list" , component: ListComponent},
    { path:"create" , component: CreateComponent},
    { path:"update" , component: UpdateComponent},
    { path:"details" , component: DetailsComponent},
  ]},
]

@NgModule({
  declarations: [
    OrdersComponent, CreateComponent, UpdateComponent, DetailsComponent, 
    ListComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class OrdersModule { }
