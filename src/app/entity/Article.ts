import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {User} from './User';
import {Picture} from './Picture';

@Entity({name: 'article'})
export class Article {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => User, user => user.articles)
  user: User;

  @OneToMany(() => Picture, picture => picture.article, {nullable: true})
  pictures: Picture[];

  @CreateDateColumn({name: 'created_at'})
  createAt!: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updateAt!: Date;
}
