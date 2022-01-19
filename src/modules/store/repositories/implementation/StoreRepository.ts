import { validate } from "class-validator";
import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../IStoreRepository";

class StoreRepository implements IStoreRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async create({
    id,
    userId,
    carId,
    new_price,
    status,
  }: ICreateStoreDTO): Promise<void> {
    const store = this.repository.create({
      new_price,
      id,
      userId,
      carId,
      status
    });

    const errors = await validate(store);
    if (errors.length > 0) {
      console.log(errors);
      throw new AppError("Validation Failed!");
    }
    else {
      await this.repository.save(store);
    }
  }

  async list(): Promise<Store[]> {
    const store = await this.repository.find();
    return store;
  }

  async findById({ id }: ICreateStoreDTO): Promise<Store> {
    const store = await this.repository.findOne(id);
    return store;
  }
}

export { StoreRepository }