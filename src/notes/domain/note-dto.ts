import { type NoteEntity } from './note-entity';

export interface CreateNoteDto extends Omit<NoteEntity, 'id'> { }
export interface UpdateNoteDto extends Partial<Omit<NoteEntity, 'id' | 'user_id'>> { }