import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly API = 'http://localhost:3000/notes'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Notes[]>(this.API);
  }
}
