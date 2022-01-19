import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  removeById(id: string): Promise<void>;
  list(): Promise<Car[]>;
  findById(id: string): Promise<Car>;
  //findStatusSold(status: string): Promise<Car[]>;
  //findStatusAvailable(status: string): Promise<Car[]>;
  //findStatusReserved(status: string): Promise<Car[]>;
}

export { ICarsRepository }

