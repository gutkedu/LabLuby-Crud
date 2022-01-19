import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReserveCarUseCase } from "./ReserveCarUseCase";

class ReserveCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { new_price, status, userId, carId } = request.body;
    const reserveCarUseCase = container.resolve(ReserveCarUseCase);

    await reserveCarUseCase.execute({
      new_price,
      status,
      userId,
      carId
    });

    return response.status(201).send();
  }
}

export { ReserveCarController }