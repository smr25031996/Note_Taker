import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/assets/Note';
import { HttpService } from 'src/services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: any;

  constructor(private httpService: HttpService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      note_id: [Math.floor(Math.random() * 100) + 1],
      note_title: ['', Validators.required],
      note_description: ['', Validators.required],
    })
  }


  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.httpService.addNote(this.myForm.value).subscribe(() =>
        alert("Note Added")
      )
    };
    location.reload();
  }




  notes: Note[] | undefined;
  ngOnInit() {
    this.httpService.getNotes().subscribe((response) => {
      this.notes = response;
      console.log(response);
    })
  }


  removePost(id: number) {
    console.log(id);
    this.httpService.deletePost(id).subscribe(() => {
      alert("Post got deleted");
    })
    location.reload();
  }
}
