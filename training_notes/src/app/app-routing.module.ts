import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';

const routes: Routes = [
  {
    path: 'create-note',
    component: CreateNoteComponent
  },
  {
    path: '',
    redirectTo: 'list-note',
    pathMatch: 'full'
  },
  {
    path: 'list-note',
    component: ListNoteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
