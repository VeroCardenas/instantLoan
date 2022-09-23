import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './views/client/clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },

  {
    path: 'clients',
    component: ClientsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
