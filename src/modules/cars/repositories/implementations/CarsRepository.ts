import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../ICarsRepository";
import { Equal, getRepository, Repository } from "typeorm";
import { validate } from "class-validator";
import { AppError } from "../../../../errors/AppError";

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
    id
  }: ICreateCarDTO): Promise<void> {
    const car = this.repository.create({
      brand,
      model,
      year,
      km,
      chassis,
      color,
      price,
      id
    });

    const errors = await validate(car);

    if (errors.length > 0) {
      console.log(errors);
      throw new AppError("Validation failed for Car creation, verify the parameters");
    }
    else {
      await this.repository.save(car);
    }
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

  /*
  async findStatusSold(status: string): Promise<Car[]> {
    const car = await this.repository.find({
      status: Equal("Sold"),
    })
    return car;
  }

  async findStatusAvailable(status: string): Promise<Car[]> {
    const car = await this.repository.find({
      status: Equal("Available"),
    })
    return car;
  }

  async findStatusReserved(status: string): Promise<Car[]> {
    const car = await this.repository.find({
      status: Equal("Reserved"),
    });
    return car;
  }
  */

}

export { CarsRepository }