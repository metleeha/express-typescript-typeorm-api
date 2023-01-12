import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Article} from './Article';

@Entity({name: 'user'})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Article, article => article.user, {nullable: true})
  articles: Article[];

  @CreateDateColumn({name: 'created_at'})
  createAt!: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updateAt!: Date;
}
