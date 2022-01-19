import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListUserByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository,
  ) { }

  async execute({ id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exist")
    }

    return user;
  }
}

export { ListUserByIdUseCase }