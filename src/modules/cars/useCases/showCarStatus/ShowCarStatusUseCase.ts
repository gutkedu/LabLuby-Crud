import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  status: string | string[];
}

@injectable()
class ShowCarStatusUseCase {
  constructor(
    @inject("CarsRepository")
    private carRepository: ICarsRepository
  ) { }

  async execute({ status }: IRequest): Promise<Car[]> {

    if (status === "Available") {
      const car = await this.carRepository.findStatusAvailable(status);
      return car;
    }
    else if (status === "Sold") {
      const car = await this.carRepository.findStatusSold(status);
      return car;
    }
    else if (status === "Reserved") {
      const car = await this.carRepository.findStatusReserved(status);
      return car;
    }
    else {
      throw new AppError("Wrong Status: Look for Available, Reserved or Sold");
    }
  }
}

export { ShowCarStatusUseCase }