import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  IsEmail,
} from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';

@Table
export class Posts extends Model<Posts> {
  @AutoIncrement
  @PrimaryKey
  @Column
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  title: string;

  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  description: string;
}
