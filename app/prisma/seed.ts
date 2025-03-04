/**
 * データベースのシードファイル
 * アプリケーション起動時に自動的に実行され、初期データを投入します
 * 
 * 使用方法:
 * 1. 手動実行: npx prisma db seed
 * 2. 自動実行: docker-compose up で自動的に実行されます
 */

import { PrismaClient } from '@prisma/client';

// Prismaクライアントのインスタンスを作成
// このクライアントを使用してデータベース操作を行います
const prisma = new PrismaClient();

/**
 * シードデータを投入する関数
 * アプリケーション起動時に自動的に実行されます
 * 
 * 投入されるデータ:
 * - プロジェクト計画書の作成（未着手、優先度高）
 * - 週次ミーティング（進行中、優先度中）
 * - コードレビュー（未着手、優先度中）
 */
async function main() {
  // 初期データとして使用するTodoの配列
  const todos = [
    {
      title: 'プロジェクト計画書の作成',
      start: new Date('2024-03-20'),
      end: new Date('2024-03-25'),
      status: 0,  // 未着手
      priority: 2, // 高
    },
    {
      title: '週次ミーティング',
      start: new Date('2024-03-22'),
      end: new Date('2024-03-22'),
      status: 1,  // 進行中
      priority: 1, // 中
    },
    {
      title: 'コードレビュー',
      start: new Date('2024-03-23'),
      end: new Date('2024-03-24'),
      status: 0,  // 未着手
      priority: 1, // 中
    },
  ];

  // 各Todoをデータベースに作成
  for (const todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }
}

/**
 * シード処理の実行
 * 
 * エラーハンドリング:
 * - エラーが発生した場合はコンソールに出力
 * - エラーコード1でプロセスを終了
 * - 処理完了後は必ずデータベース接続を切断
 */
main()
  .catch((e) => {
    console.error(e);  // エラーが発生した場合はログに出力
    process.exit(1);   // エラーコード1で終了
  })
  .finally(async () => {
    await prisma.$disconnect();  // 処理完了後、データベース接続を切断
  }); 