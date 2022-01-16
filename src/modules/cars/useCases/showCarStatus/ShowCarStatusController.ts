import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowCarStatusUseCase } from "./ShowCarStatusUseCase";


class ShowCarStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { status } = request.query;

    const showCarStatusUseCase = container.resolve(ShowCarStatusUseCase);

    const showCarStat = await showCarStatusUseCase.execute({ status });

    return response.json(showCarStat);
  }
}

export { ShowCarStatusController }