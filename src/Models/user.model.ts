import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  IsEmail,
  Unique,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;

  @IsEmail
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  password: string;
}
