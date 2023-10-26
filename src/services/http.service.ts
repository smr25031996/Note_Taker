import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/assets/Note';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  apiUrl = "http://localhost:3000/notes";
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  deletePost(id: number): Observable<Note> {
    return this.http.delete<Note>(`${this.apiUrl}/${id}`)
  }

}
