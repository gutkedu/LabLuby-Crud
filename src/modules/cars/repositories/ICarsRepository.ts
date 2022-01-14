import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  //findByStatus(status: string): Promise<Car>;
  removeById(id: string): Promise<void>;
  list(): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository }