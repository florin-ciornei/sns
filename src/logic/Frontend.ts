import { Note, NoteMetadata, NoteContents } from "./Note";
import Author from "./Author";

interface Frontend {
  /** If the authorId in note is empty, note is assigned to the local author.
   *  If the authorId is not empty, not is assigned to the remote author.
   */
  saveNote(note: Note, encryptionKey?: string): Promise<Note>;
  /** If all the notes from an author are deleted, the author is deleted */
  deleteNote(noteMetadata: NoteMetadata): Promise<boolean>;

  getRemoteAuthor(authorId: string): Promise<Author>;
  getLocalAuthor(): Author;

  getRemoteAuthorNotes(authorName: string): Promise<NoteMetadata[]>;

  getLocalNotes(): NoteMetadata[];
  getNoteContents(
    noteMetadata: NoteMetadata,
    encryptionKey?: string
  ): Promise<NoteContents>;

  saveLocalAuthor(author: Author): any;
  saveRemoteAuthor(author: Author): Promise<Author>;
}
