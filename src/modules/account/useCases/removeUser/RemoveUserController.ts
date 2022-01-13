import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveUserUseCase } from "./RemoveUserUseCase";

class RemoveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const createRemoveUserUseCase = container.resolve(RemoveUserUseCase);
    await createRemoveUserUseCase.execute({ id });
    return response.status(200).send();
  }
}

export { RemoveUserController }