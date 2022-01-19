import { Request, Response } from "express";
import { container } from "tsyringe";
import { SellCarUseCase } from "./SellCarUseCase";

class SellCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { new_price, status, user, car } = request.body;
    const sellCarUseCase = container.resolve(SellCarUseCase);

    await sellCarUseCase.execute({
      new_price,
      status,
      user,
      car
    });

    return response.status(201).send();
  }
}

export { SellCarController }