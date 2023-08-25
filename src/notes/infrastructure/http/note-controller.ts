import { type Request, type Response } from 'express';
import { type NoteUseCase } from '../../application/note-use-case';
import { Rsp } from '../../../shared/response';

export class NoteController {
	constructor(private readonly noteUseCase: NoteUseCase) { }

	public getById = async (req: Request, res: Response) => {
		try {
			const { id = '' } = req.params;
			const note = await this.noteUseCase.findNoteById(id, req.uid!);

			return Rsp.success(res, note, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};

	public getAll = async (req: Request, res: Response) => {
		try {
			const uid = req.uid ?? '';

			const notes = await this.noteUseCase.findNotes(uid);

			return Rsp.success(res, notes, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};

	public insert = async (req: Request, res: Response) => {
		try {
			const data = {
				...req.body,
				user_id: req.uid
			};

			const note = await this.noteUseCase.createNote(data);
			return Rsp.success(res, note, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};
	public update = async (req: Request, res: Response) => {
		try {
			const { id } = req.params

			const note = await this.noteUseCase.updateNote(id, req.body, req.uid!);

			return Rsp.success(res, note, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};
	public delete = async (req: Request, res: Response) => {
		try {
			const { id } = req.params

			const note = await this.noteUseCase.deleteNote(id, req.uid!);

			return Rsp.success(res, note, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};
}
