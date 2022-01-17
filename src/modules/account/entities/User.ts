import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { Car } from "../../cars/entities/Car";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  @IsString()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;

  @Column()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  avatar?: string;

  @Column()
  @IsString()
  bio?: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  // @OneToMany(() => Car, car => car.id)
  //cars: Car[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }