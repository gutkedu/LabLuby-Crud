import { getRepository, Repository } from "typeorm";
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
    user_id
  }: ICreateStoreDTO): Promise<void> {
    const store = this.repository.create({
      user_id
    });
  }


  list(): Promise<Store[]> {
    throw new Error("Method not implemented.");
  }

}

export { StoreRepository }