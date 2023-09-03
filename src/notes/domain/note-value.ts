import { v4 as uuid } from 'uuid';

import { type NoteEntity } from './note-entity';

export class NoteValue implements NoteEntity {
	id: string;
	emoji: string;
	title: string;
	content: string;
	user_id: string;

	constructor({
		title,
		content,
		user_id,
		emoji
	}: {
		title: string;
		emoji: string;
		content?: string;
		user_id: string;
	}) {
		this.id = uuid();
		this.emoji = emoji;
		this.title = title;
		this.user_id = user_id;
		this.content = content ?? 'empty';
	}
}
