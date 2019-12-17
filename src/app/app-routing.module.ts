import { NgModule ,Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{UserComponent} from './user/user.component';


const routes: Routes = [
  {
    path:'user/:username',
    component:UserComponent
  }
];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
