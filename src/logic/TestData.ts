import { Note, NoteContents, NoteMetadata, EncryptionType } from './Model/Note';
import { colors } from './Constants';

/**
 * Generate test notes (with color, tags, content, encryption, id etc)
 * @param nr number of generated note
 */
export const generateNotes = (nr: number): Note[] => {
    const notes: Note[] = [];

    for (let i = 0; i < nr; i++) {
        const n = new Note(new NoteContents(), new NoteMetadata());
        n.metadata.id = i + "";
        if (Math.random() < .5) {
            n.metadata.encryptionType = EncryptionType.NoEncryption;
        } else {
            n.metadata.encryptionType = EncryptionType.BlowFish;
        }
        if (Math.random() < .5) {
            n.metadata.color = "";
        } else {
            n.metadata.color = Object.keys(colors)[Math.floor(Math.random() * 6)];
        }
        if (Math.random() < .5) {
            n.metadata.tags.add("tag 1").add("tag 2");
        }
        n.contents.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus, ex id aliquam posuere, orci diam faucibus lorem, quis blandit sapien nulla nec ante. Morbi sodales, lacus quis auctor eleifend, sem tellus molestie erat, eget tempor enim leo ac risus. Ut in lacus id orci tempor imperdiet id et odio. Integer sit amet eros justo. Quisque non purus aliquam, mattis nisi nec, vulputate neque. Pellentesque fermentum lacus velit, eget laoreet ipsum pretium a. Mauris pretium sapien venenatis dictum dictum. Vestibulum velit urna, consequat eu varius vitae, tempus sit amet mi. Aenean odio elit, tincidunt sit amet ornare quis, dignissim a ex. Etiam non laoreet tortor. Donec sed elit velit. Sed eu orci luctus ligula vehicula vulputate vitae in ante.";
        notes.push(n);
    }

    return notes;
}