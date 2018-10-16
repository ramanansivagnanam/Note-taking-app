import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class BackendService{
    constructor(private http : Http){
    }
    storeDate(data : any[]){
       this.http.post('https://notetakingapp-6f26c.firebaseio.com/data.json',data);
    }
}