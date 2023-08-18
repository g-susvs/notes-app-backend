import { NoteEntity } from "./note-entity";
import { NoteValue } from "./note-value";

export interface NoteRepository {
    findById(id: string): Promise<NoteEntity | null>,
    findAllNotes(): Promise<NoteEntity[] | null>,
    create(newNote: NoteEntity): Promise<NoteEntity | null>
}