import { NoteEntity } from "../../domain/note-entity";
import { NoteRepository } from "../../domain/note-repository";
import NoteSchema from "./note-schema";

export class MongoNoteRepository implements NoteRepository {

    async findById(id: string) {

        const note = await NoteSchema.findOne<NoteEntity>({ id })

        return note
    }

    async findAllNotes(): Promise<NoteEntity[]> {
        const notes = await NoteSchema.find<NoteEntity>()

        return notes
    }

    async create(newNote: NoteEntity): Promise<NoteEntity> {

        //TODO: BUSCAR USUARIO

        const note = await NoteSchema.create(newNote)

        return note as NoteEntity
    }
}