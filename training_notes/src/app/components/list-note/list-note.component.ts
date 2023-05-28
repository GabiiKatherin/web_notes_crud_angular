import { NoteService } from '../note.service';
import { Notes } from './../../components/notes'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {

  listNotes: Notes[] = [];

  constructor(private service: NoteService) {}

  ngOnInit(): void {
    this.service.list()
  }

}
