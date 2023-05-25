import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note = {
    content:'I love Angular',
    origin:'Gabrielli',
    model:'model3'
  }
  constructor() {  }

  ngOnInit(): void {

  }

}
