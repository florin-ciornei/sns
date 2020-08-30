import IBackend from './IBackend';
import { Note, NoteMetadata, NoteContents, NoteType } from './Model/Note';
import Author from './Model/Author';

export class Backend implements IBackend {
    async saveNote(note: Note, encryptionKey?: string | undefined): Promise<Note> {
        if (note.metadata.type == NoteType.Local) {
            if (note.metadata.id == "") {
                //note doesn't have an id yet, this means it's a new note
                note.metadata.id = new Date().getTime().toString();//when the note is made public, it will be overwritten
                const localNotesString = localStorage.getItem("localNotes");
                if (localNotesString == null) {
                    //local notes are not present, create a new map and save it
                    const localNotes: Map<string, Note> = new Map<string, Note>([
                        [note.metadata.id, note]
                    ]);
                    localStorage.setItem("localNotes", JSON.stringify([...localNotes]));
                } else {
                    //local notes are present, load them, add the note to them and save them
                    const localNotes: Map<string, Note> = new Map<string, Note>(JSON.parse(localNotesString));
                    localNotes.set(note.metadata.id, note);
                    localStorage.setItem("localNotes", JSON.stringify([...localNotes]));
                }
            } else {
                //note has an id, this means we just replace the existing local note with this one
                const localNotesString = localStorage.getItem("localNotes");
                if (localNotesString == null) {
                    throw new Error("Local notes are not present, but they should be! TODO, recreate local notes again with this note");
                }
                const localNotes: Map<string, Note> = new Map<string, Note>(JSON.parse(localNotesString));
                localNotes.set(note.metadata.id, note);
                localStorage.setItem("localNotes", JSON.stringify([...localNotes]));
            }
        }

        return note;
    }

    deleteNote(noteMetadata: NoteMetadata): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getRemoteAuthor(authorId: string): Promise<Author> {
        throw new Error("Method not implemented.");
    }
    getLocalAuthor(): Author {
        throw new Error("Method not implemented.");
    }
    getRemoteAuthorNotes(authorName: string): Promise<NoteMetadata[]> {
        throw new Error("Method not implemented.");
    }
    getLocalNotes(): Note[] {
        const localNotesString = localStorage.getItem("localNotes");
        if (localNotesString == null) {
            return [];
        }
        const localNotes: Map<string, Note> = new Map<string, Note>(JSON.parse(localNotesString));
        console.log(Array.from(localNotes.values()));
        return Array.from(localNotes.values());
    }
    getNoteContents(noteMetadata: NoteMetadata, encryptionKey?: string | undefined): Promise<NoteContents> {
        throw new Error("Method not implemented.");
    }
    saveLocalAuthor(author: Author) {
        throw new Error("Method not implemented.");
    }
    saveRemoteAuthor(author: Author): Promise<Author> {
        throw new Error("Method not implemented.");
    }

}