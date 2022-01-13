import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserInfoUseCase {
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
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User doesn't exist!");
    }

  }
}

export { UpdateUserInfoUseCase }