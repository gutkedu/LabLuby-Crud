import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  removeById(id: string): Promise<void>;
  list(): Promise<Car[]>;
  findById(id: string): Promise<Car>;
  findByStatus(status: string): Promise<Car>;
}

export { ICarsRepository }