import Author from "./Author";

export class NoteContents { }

export class Permissions {
    readonly = false;
}

enum EncryptionType {
    NoEncryption,
    AES,
    RC4,
    RC5,
    RC6,
    BlowFish,
    DES,
    TDES
}

export class Note {
    contents: NoteContents = new NoteContents();
    metadata: NoteMetadata = new NoteMetadata();
}

export class NoteMetadata {
    id = "";
    authorId = "";
    /** Restricted to 127 */
    title = "";
    color = "";
    permissions: Permissions = new Permissions();
    encryptionType: EncryptionType = EncryptionType.NoEncryption;
    isPublic = false;
    createDate: Date = new Date();
    editDate: Date = new Date();
}

