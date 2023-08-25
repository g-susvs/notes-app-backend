import { UpdateNoteDto } from './note-dto';
import { type NoteEntity } from './note-entity';

export interface NoteRepository {
	findById: (id: string) => Promise<NoteEntity | null>;
	findNotesByUserId: (uid: string) => Promise<NoteEntity[] | null>;
	create: (newNote: NoteEntity) => Promise<NoteEntity | null>;
	update: (id: NoteEntity['id'], updateNote: UpdateNoteDto) => Promise<NoteEntity>;
	delete: (id: NoteEntity['id']) => Promise<NoteEntity>;
}
