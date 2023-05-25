import { Component } from '@angular/core';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent {

  listNotes = [
    {
      content:'Test',
      origin:'Gabrielli',
      model:'model3'
    },

    {
      content:'Novo teste',
      origin:'Gabrielli',
      model:'model1'
    },

    {
      content:'wfkjnajnjdsnjdsafnjadsn cdmsnvkjdfnewjksfnkjdsfbWE KSNFD  VNAKVNSEKJDVNkjwnCWKNCAWKJVNEALDFKV AFEK.M DNJVAÇKSVNÇAWKJVNWÇAKJJVWNAVAJWKN ÇJFMDNVOWEÇFñvwk',
      origin:'Gabrielli',
      model:'model1'
    }
  ];
}
