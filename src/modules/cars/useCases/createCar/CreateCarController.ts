import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { container } from "tsyringe";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      model,
      year,
      km,
      chassis,
      color,
      price,
      status } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);
    await createCarUseCase.execute({
      brand,
      model,
      year,
      km,
      chassis,
      color,
      price,
      status
    });

    return response.status(201).send();
  }
}

export { CreateCarController }
