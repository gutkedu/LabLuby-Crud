import { v4 as uuidV4 } from "uuid"
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  OneToOne,
  Index,
} from "typeorm"
import { IsInt, IsPositive, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Store } from "../../store/entities/Store";
import { User } from "../../account/entities/User";

@Entity("cars")
class Car {
  @PrimaryColumn()
  @Index({ unique: true })
  id?: string;

  @Column()
  @IsString()
  @MaxLength(20)
  brand: string;

  @Column()
  @IsString()
  @MaxLength(20)
  model: string;

  @Column()
  @IsInt()
  @IsPositive()
  @Min(1886)
  @Max(3000)
  year: number;

  @Column()
  @IsInt()
  @IsPositive()
  @Min(0)
  @Max(1000000)
  km: number;

  @Column()
  @IsString()
  @MaxLength(30)
  chassis: string;

  @Column()
  @IsString()
  @MaxLength(15)
  color: string;

  @Column()
  @IsInt()
  @IsPositive()
  @Min(0)
  @Max(10000000)
  price: number;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Store, store => store.id)
  store: Store;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car }

