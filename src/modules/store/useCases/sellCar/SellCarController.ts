import { Request, Response } from "express";
import { container } from "tsyringe";
import { SellCarUseCase } from "./SellCarUseCase";

class SellCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { new_price, status, userId, carId } = request.body;
    const sellCarUseCase = container.resolve(SellCarUseCase);

    await sellCarUseCase.execute({
      new_price,
      status,
      userId,
      carId
    });

    return response.status(201).send();
  }
}

export { SellCarController }