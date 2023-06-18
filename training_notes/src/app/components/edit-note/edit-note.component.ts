import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{

note: Note = {
  id:0,
  content: '',
  origin: '',
  model: ''

}
constructor(
  private service: NoteService,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit(): void{
  const id = this.route.snapshot.paramMap.get('id')
  this.service.searchId(parseInt(id!)).subscribe((note) => {
  this.note = note
})
}

editNote() {
  this.service.edit(this.note).subscribe(() => {
  this.router.navigate(['/list-note'])
})
}

cancelNote() {
  this.router.navigate(['/list-note'])
}
}
