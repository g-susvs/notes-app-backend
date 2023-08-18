import { NotFoundError } from "../../shared/errors";
import { UserRepository } from "../../users/domain/user-repository";
import { CreateNoteDto } from "../domain/note-dto";
import { NoteRepository } from "../domain/note-repository";
import { NoteValue } from "../domain/note-value";

export class NoteUseCase {
    constructor(
        private readonly noteRepository: NoteRepository,
        private readonly userRepository: UserRepository
    ) { }

    public findNoteById = async (id: string) => {

        const note = await this.noteRepository.findById(id)

        if (!note) throw new NotFoundError("Note Not-found");

        return note
    }

    public findNotes = async () => {

        const notes = await this.noteRepository.findAllNotes()

        return notes
    }

    public createNote = async ({ title, content, user_id, }: CreateNoteDto) => {

        const noteValue = new NoteValue({ title, content, user_id })

        const user = await this.userRepository.findByUid(user_id)

        if (!user) throw new NotFoundError("User not exist");

        const note = await this.noteRepository.create(noteValue)

        return note
    }

}