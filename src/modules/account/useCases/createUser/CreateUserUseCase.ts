import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { IUsersRepository } from "../../repositories/IUserRepository"
import { AppError } from "../../../../errors/AppError"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    cpf,
    name,
    email,
    password,
    bio
  }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exist!");
    }

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      cpf,
      name,
      email,
      password: passwordHash,
      bio
    })
  }
}

export { CreateUserUseCase }