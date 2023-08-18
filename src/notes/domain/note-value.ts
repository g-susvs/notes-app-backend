import { v4 as uuid } from 'uuid'

import { NoteEntity } from "./note-entity";

export class NoteValue implements NoteEntity {
    id: string;
    title: string;
    content: string;
    user_id: string;

    constructor({ title, content, user_id }: { title: string, content?: string, user_id: string }) {
        this.id = uuid();
        this.title = title;
        this.user_id = user_id;
        this.content = content ?? "empty"
    }
}