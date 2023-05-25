import { Request, Response } from 'express';

export abstract class BaseController {
	sendResponse(_req: Request, res: Response): void {
		const { data, status } = res.locals;
		res.status(status).send(data);
	}

	getError(err: unknown): string {
		if (err instanceof Error) {
			return err.message
		}

		return "not supported";
	}
}

