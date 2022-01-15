import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowCarUseCase } from "./ShowCarUseCase";

class ShowCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const showCarUseCase = container.resolve(ShowCarUseCase);
    
    const showCar = await showCarUseCase.execute({id});

    return response.json(showCar);
  }
}

export { ShowCarController }