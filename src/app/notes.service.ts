export class NotesService {
    notes = [
        {
            note: 'this is my first notes'
        },
        {
            note : 'I am adding new notes to this app'
        }
    ];

    getNotes() {
        return this.notes;
    }

    addNotes(note: string) {
        this.notes.push({ note: note });
    }
    deleteNotes(id){
        // const index : number = this.notes.indexOf(note);
         this.notes.splice(id,1);
    }
    editNotes(id){
        
    }
}
