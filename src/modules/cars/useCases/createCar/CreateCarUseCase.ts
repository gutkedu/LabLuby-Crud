import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({
    brand,
    model,
    year,
    km,
    chassis,
    color,
    price,
    status,
    id,
  }: ICreateCarDTO): Promise<void> {
    const carAlreadyExist = await this.carsRepository.findById(id);

    if (carAlreadyExist) {
      throw new AppError("Car already exist!");
    }

    await this.carsRepository.create({
      brand,
      model,
      year,
      km,
      chassis,
      color,
      price,
      status
    })
  }
}

export { CreateCarUseCase }