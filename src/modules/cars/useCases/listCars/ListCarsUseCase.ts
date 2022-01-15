import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { Car } from "../../entities/Car";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carRepository: ICarsRepository
  ) { }

  async execute(): Promise<Car[]> {
    const cars = await this.carRepository.list();
    return cars;
  }
}

export { ListCarsUseCase }