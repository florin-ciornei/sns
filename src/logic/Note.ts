import Author from "./Author";

export class NoteContents {
  text = "";
}

export class Permissions {
  readonly = false;
}

export enum EncryptionType {
  NoEncryption,
  AES,
  RC4,
  RC5,
  RC6,
  BlowFish,
  DES,
  TDES
}

export class NoteMetadata {
  id = "";
  authorId = "";
  /** Restricted to 127 */
  title = "";
  color = "";//should be the name of the color from "colors" from Constants.ts
  permissions: Permissions = new Permissions();
  encryptionType: EncryptionType = EncryptionType.NoEncryption;
  isPublic = false;
  createDate: Date = new Date();
  editDate: Date = new Date();
  tags: Set<string> = new Set<string>();

  isEncrypted(): boolean {
    return this.encryptionType != EncryptionType.NoEncryption;
  }
}

export class Note {

  contents: NoteContents;
  metadata: NoteMetadata;

  constructor(contents: NoteContents, metadata: NoteMetadata) {
    this.contents = contents;
    this.metadata = metadata;
  }

}