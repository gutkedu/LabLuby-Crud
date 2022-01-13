import { injectable, inject } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";


@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) { }

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();
    return users;
  }
}

export { ListUsersUseCase }