import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Article} from './Article';

@Entity({name: 'picture'})
export class Picture {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Article, article => article.pictures, { onDelete: 'CASCADE' })
  article: Article;

  @CreateDateColumn({name: 'created_at'})
  createAt!: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updateAt!: Date;
}
