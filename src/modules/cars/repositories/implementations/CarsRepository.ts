import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../ICarsRepository";
import { getRepository, Repository } from "typeorm";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    model,
    year,
    km,
    chassis,
    color,
    price,
    id,
    status
  }: ICreateCarDTO): Promise<void> {
    const car = this.repository.create({
      brand,
      model,
      year,
      km,
      chassis,
      color,
      price,
      id,
      status
    });
    await this.repository.save(car);
  }

  async removeById(id: string): Promise<void> {
    const car = await this.repository.findOne(id);
    await this.repository.remove(car);
  }

  async list(): Promise<Car[]> {
    const cars = await this.repository.find();
    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne(id);
    return car;
  }

}

export { CarsRepository }