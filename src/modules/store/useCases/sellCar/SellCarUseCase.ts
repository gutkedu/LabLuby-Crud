import { inject, injectable } from "tsyringe";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class SellCarUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute({
    new_price,
    userId,
    carId,
    status
  }: ICreateStoreDTO): Promise<void> {

    await this.storeRepository.create({
      new_price,
      userId,
      carId,
      status
    });
  }
}

export { SellCarUseCase }