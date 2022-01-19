import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowUserCarUseCase } from "./ShowUserCarUseCase";

class ShowUserCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.params;
    const showUserCarUseCase = container.resolve(ShowUserCarUseCase);
    const showUserStore = await showUserCarUseCase.execute({ user });
    return response.json(showUserStore);
  }
}

export { ShowUserCarController }