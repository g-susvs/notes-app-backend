import { MongoUserRepository } from "../../../users/infrastructure/mongo/mongo-user-repository"
import { NoteUseCase } from "../../application/note-use-case"
import { MongoNoteRepository } from "../mongo/mongo-note-Repository"
import { NoteController } from "./note-controller"

const userRepo = new MongoUserRepository()
const noteRepo = new MongoNoteRepository()

const noteUseCase = new NoteUseCase(noteRepo, userRepo)

export const noteCtrl = new NoteController(noteUseCase)

