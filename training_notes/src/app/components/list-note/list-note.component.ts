import { NoteService } from './../note.service';
import { Note } from '../note'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {

  listNotes: Note[] = [];

  constructor(private service: NoteService) {}

  ngOnInit(): void {
    this.service.list().subscribe((listNotes) => {
      this.listNotes = listNotes
    });

  }

}
