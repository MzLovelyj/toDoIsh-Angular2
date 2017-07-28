import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },

  {
    path: 'lists',
    component: ListsPageComponent
  },

  {
    path: 'edit',
    component: ListsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
