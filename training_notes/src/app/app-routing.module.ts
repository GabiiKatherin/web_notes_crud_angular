import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { DeleteNoteComponent } from './components/delete-note/delete-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';


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
  },
  {
    path: 'note/deleteNote/:id',
    component: DeleteNoteComponent
  },
  {
    path: 'note/editNote/:id',
    component: EditNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
