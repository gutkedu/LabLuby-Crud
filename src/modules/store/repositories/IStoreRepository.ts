import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { Store } from "../entities/Store";

interface IStoreRepository {
  create(data: ICreateStoreDTO): Promise<void>;
  list(): Promise<Store[]>;
}

export { IStoreRepository }