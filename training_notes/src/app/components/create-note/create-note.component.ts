import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {

  note = {
    id:'1',
    content: 'TEST',
    origin:'Me',
    model:''
  }

  constructor() {}
  ngOnInit(): void {

  }

  createNote(){
    alert("New Note Created!")
  }

  cancelNote(){
    alert("New Note Canceled!")

  }
}
