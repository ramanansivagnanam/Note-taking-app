import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { BackendService } from '../backend.service';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-makenotes',
  templateUrl: './makenotes.component.html',
  styleUrls: ['./makenotes.component.css']
})
export class MakenotesComponent implements OnInit {

   notes: {note:string}[] = [];
   editMode:false;
  constructor(private notesService : NotesService,
    private backendService: BackendService) 
  {
  }
  ngOnInit() {
       this.notes = this.notesService.notes;
  }
  onAddPost(note : string){
    // console.log(note);
     this.notesService.addNotes(note);
  }
  onDeleteNotes(id){
    // console.log(id);
    this.notesService.deleteNotes(id);
  }
  onEditNotes(id){
     this.notesService.editNotes(id);
  }
  //  onSave(){
  //    this.backendService.storeDate(this.notes)
  //        .subscribe(
  //           response => console.log(response),
  //           error => console.log(error)
  //        );
  //      }
}
