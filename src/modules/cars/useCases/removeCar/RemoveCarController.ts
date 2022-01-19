import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveCarUseCase } from "./RemoveCarUseCase";

class RemoveCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeCarUseCase = container.resolve(RemoveCarUseCase);

    await removeCarUseCase.execute({ id });

    return response.status(200).send();
  }
}

export { RemoveCarController }