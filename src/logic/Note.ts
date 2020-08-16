import Author from "./Author";

export class Note {
    contents: NoteContents = new NoteContents;
    metadata: NoteMetadata = new NoteMetadata;
}

export class NoteMetadata {
    id: string = "";
    authorId: string = "";
    /** Restricted to 127 */
    title: string = "";
    color: string = "";
    permissions: Permissions = new Permissions;
    encryptionType: EncryptionType = EncryptionType.NoEncryption;
    isPublic: boolean = false;
    createDate: Date = new Date;
    editDate: Date = new Date;
}

export class NoteContents {

}

export class Permissions {
    readonly: boolean = false;
}

enum EncryptionType {
    NoEncryption, AES, RC4, RC5, RC6, BlowFish, DES, TDES
}
