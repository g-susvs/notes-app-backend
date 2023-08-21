import { type NoteEntity } from '../../domain/note-entity';
import { type NoteRepository } from '../../domain/note-repository';
import NoteSchema from './note-schema';

export class MongoNoteRepository implements NoteRepository {
	async findNotesByUserId(uid: string): Promise<NoteEntity[] | null> {
		const notes = await NoteSchema.find<NoteEntity>({ user_id: uid });

		return notes;
	}

	async findById(id: string) {
		const note = await NoteSchema.findOne<NoteEntity>({ id });

		return note;
	}

	async create(newNote: NoteEntity): Promise<NoteEntity> {
		const note = await NoteSchema.create(newNote);

		return note as NoteEntity;
	}
}
