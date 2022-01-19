import { IsInt, IsPositive, IsString, MaxLength } from "class-validator";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"
import { User } from "../../account/entities/User";
import { Car } from "../../cars/entities/Car";

@Entity("store")
class Store {
  @PrimaryColumn()
  id?: string;

  @OneToOne(() => User, user => user.id, { eager: true })
  @JoinColumn()
  userId: User;

  @OneToOne(() => Car, car => car.id, { eager: true })
  @JoinColumn()
  carId: Car;

  @Column()
  @IsPositive()
  @IsInt()
  new_price: number;

  @Column()
  @IsString()
  @MaxLength(20)
  status: string;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Store }