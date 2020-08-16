import * as Note from "./Note";
import Author from "./Author";

interface Frontend {
  /** If the authorId in note is empty, note is assigned to the local author.
   *  If the authorId is not empty, not is assigned to the remote author.
   */
  saveNote(note: Note.Note, encryptionKey?: string): any; //TODO async
  /** If all the notes from an author are deleted, the author is deleted */
  deleteNote(noteMetadata: Note.NoteMetadata): any; //TODO async

  getRemoteAuthor(authorId: string): Author; //TODO async
  getLocalAuthor(): Author;

  getRemoteAuthorNotes(authorName: string): Note.NoteMetadata[]; //TODO async

  getLocalNotes(): Note.NoteMetadata[];
  getNoteContents(
    noteMetadata: Note.NoteMetadata,
    encryptionKey?: string
  ): Note.NoteContents; //TODO async

  saveLocalAuthor(author: Author): any;
  saveRemoteAuthor(author: Author): any; //TODO async
}
