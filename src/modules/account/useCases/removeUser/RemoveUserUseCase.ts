import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRemoveUser {
  id: string
}

@injectable()
class RemoveUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) { }

  async execute({ id }: IRemoveUser): Promise<void> {
    const userExist = await this.userRepository.findById(id);

    if (!userExist) {
      throw new AppError("Cant delete User that doesn't exist");
    }

    this.userRepository.removeById(id);
  }
}

export { RemoveUserUseCase }