import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStoreUseCase } from "./ListStoreUseCase";


class ListStoreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listStoreUseCase = container.resolve(ListStoreUseCase);

    const allStore = await listStoreUseCase.execute();

    return response.json(allStore);
  }
}

export { ListStoreController }