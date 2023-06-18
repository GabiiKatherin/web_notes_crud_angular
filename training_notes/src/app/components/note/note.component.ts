import { Note } from '../note';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {

  @Input() note: Note = {
    id: 0,
    content:'I love Angular',
    origin:'Gabrielli',
    model:'model3'
  }
  constructor() {  }

  ngOnInit(): void {

  }

  widthNote(): string {
    if(this.note.content.length >= 256) {
      return 'note-g'
    }
    return 'note-p'
  }

}
