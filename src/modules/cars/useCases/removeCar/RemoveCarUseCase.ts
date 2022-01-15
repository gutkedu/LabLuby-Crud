import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRemoveCar {
  id: string
}

@injectable()
class RemoveCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carRepository: ICarsRepository
  ) { }

  async execute({ id }: IRemoveCar): Promise<void> {
    const carExist = await this.carRepository.findById(id);

    if (!carExist) {
      throw new AppError("Cant delete Car that doesn't exist!");
    }

    this.carRepository.removeById(id);
  }
}

export { RemoveCarUseCase }