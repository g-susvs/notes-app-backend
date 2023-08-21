import { type NoteEntity } from './note-entity';

export interface CreateNoteDto extends Omit<NoteEntity, 'id'> {}
