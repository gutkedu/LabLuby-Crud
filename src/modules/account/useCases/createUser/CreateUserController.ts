import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";
import { validate } from "uuid";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, name, email, password, bio } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      cpf,
      name,
      email,
      password,
      bio
    });

    return response.status(201).send();
  }
}

export { CreateUserController }