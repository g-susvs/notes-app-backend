import { Request, Response } from "express";
import { NoteUseCase } from "../../application/note-use-case";
import { Rsp } from "../../../shared/response";

export class NoteController {
    constructor(private noteUseCase: NoteUseCase) { }

    public getById = async (req: Request, res: Response) => {
        try {
            const { id = '' } = req.params;
            const note = await this.noteUseCase.findNoteById(`${id}`);
            return Rsp.success(res, note, 200)


        } catch (error) {
            console.log(error)
            return Rsp.error(res, error)
        }
    }
    public getAll = async (req: Request, res: Response) => {
        try {
            const notes = await this.noteUseCase.findNotes();
            return Rsp.success(res, notes, 200)

        } catch (error) {
            console.log(error)
            return Rsp.error(res, error)
        }
    }

    public insert = async ({ body }: Request, res: Response) => {
        try {
            const note = await this.noteUseCase.createNote(body);
            return Rsp.success(res, note, 200)

        } catch (error) {
            console.log(error)
            return Rsp.error(res, error)
        }
    }
}