import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserInfoUseCase } from "./UpdateUserInfoUseCase";


class UpdateUserInfoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      cpf,
      name,
      email,
      bio
    } = request.body;

    const updateUserInfoUseCase = container.resolve(UpdateUserInfoUseCase);
    await updateUserInfoUseCase.execute({
      cpf,
      name,
      email,
      bio,
      id
    })
    return response.status(204).send();
  }
}

export { UpdateUserInfoController }