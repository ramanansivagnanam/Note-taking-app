import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { BackendService } from './backend.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [NotesService,BackendService]
})
export class AppComponent implements OnInit {
  title = 'meanproject';
   ngOnInit(){
      firebase.initializeApp({

      });
   }
}
