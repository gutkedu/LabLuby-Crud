import { inject, injectable } from "tsyringe";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  id: string;
}

@injectable()
class ShowCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carRepository: ICarsRepository
  ) { }

  async execute({ id }: IRequest): Promise<Car> {
    const car = await this.carRepository.findById(id);
    return car;
  }
}

export { ShowCarUseCase }