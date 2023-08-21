import { type NoteEntity } from './note-entity';

export interface NoteRepository {
	findById: (id: string) => Promise<NoteEntity | null>;
	findNotesByUserId: (uid: string) => Promise<NoteEntity[] | null>;
	create: (newNote: NoteEntity) => Promise<NoteEntity | null>;
}
