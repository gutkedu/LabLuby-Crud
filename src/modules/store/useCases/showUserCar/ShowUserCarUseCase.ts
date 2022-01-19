import { inject, injectable } from "tsyringe";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../../repositories/IStoreRepository";

interface IRequest {
  user: any;
}

@injectable()
class ShowUserCarUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute({ user }: IRequest): Promise<Store> {
    const storeUser = await this.storeRepository.findByUserId(user);
    return storeUser;
  }
}

export { ShowUserCarUseCase }