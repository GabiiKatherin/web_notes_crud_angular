import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { FormsModule } from '@angular/forms';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { NoteComponent } from './components/note/note.component';
import { DeleteNoteComponent } from './components/delete-note/delete-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateNoteComponent,
    ListNoteComponent,
    NoteComponent,
    DeleteNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
