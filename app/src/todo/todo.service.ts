import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';

/**
 * TodoのCRUD操作を担当するサービス
 * @Injectable() デコレータにより、このクラスは依存性注入システムで管理される
 */
@Injectable()
export class TodoService {
  /** Prismaクライアントのインスタンス */
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * 新しいTodoを作成する
   * @param createTodoDto - 作成するTodoのデータ
   * @returns 作成されたTodo
   */
  async create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: createTodoDto,
    });
  }

  /**
   * すべてのTodoを取得する
   * @returns Todoの配列
   */
  async findAll() {
    return this.prisma.todo.findMany();
  }

  /**
   * 指定されたIDのTodoを取得する
   * @param id - TodoのID
   * @returns 指定されたTodo
   */
  async findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  /**
   * 指定されたIDのTodoを更新する
   * @param id - 更新するTodoのID
   * @param updateTodoDto - 更新するデータ
   * @returns 更新されたTodo
   */
  async update(id: number, updateTodoDto: CreateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  /**
   * 指定されたIDのTodoを削除する
   * @param id - 削除するTodoのID
   * @returns 削除されたTodo
   */
  async remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
} 