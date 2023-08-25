import { UpdateNoteDto } from '../../domain/note-dto';
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
	async update(id: string, updateNote: UpdateNoteDto): Promise<NoteEntity> {
		const note = await NoteSchema.findOneAndUpdate({ id }, updateNote, { new: true })
		return note as NoteEntity
	};

	async delete(id: string): Promise<NoteEntity> {
		const note = await NoteSchema.findOneAndRemove<NoteEntity>({ id })

		return note as NoteEntity
	}
}
