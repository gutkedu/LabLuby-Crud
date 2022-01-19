import { inject, injectable } from "tsyringe";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class ListStoreUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }
  async execute(): Promise<Store[]> {
    const store = await this.storeRepository.list();
    return store;
  }
}

export { ListStoreUseCase }