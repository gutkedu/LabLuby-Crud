import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
  cpf: string
  name: string
  email: string
  bio: string
  id: string
}


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
    bio,
    id
  }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User doesn't exist!");
    }

    user.cpf = cpf ? cpf : user.cpf;
    user.name = name ? name : user.name;
    user.bio = bio ? bio : user.bio;
    user.email = email ? email : user.email;

    await this.usersRepository.update(user);
  }
}

export { UpdateUserInfoUseCase }