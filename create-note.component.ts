import { Note } from '../note'
import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {

  note: Note = {
    content: '',
    origin: '',
    model: 'model1'
  }

  constructor(
    private service: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createNote(){
    this.service.create(this.note).subscribe(() => {
      this.router.navigate(['../list-note'])
    })
  }

  cancelNote(){
      this.router.navigate(['../list-note'])
  }
}
