import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

/**
 * アプリケーションのルートモジュール
 * 
 * @Module() デコレータの説明:
 * 
 * imports: 他のモジュールをインポート
 * - インポートしたモジュールの機能（コントローラー、プロバイダー）が利用可能になる
 * 
 * controllers: HTTPリクエストを処理するコントローラー
 * - @Controller() デコレータを使用
 * - ルーティングとリクエスト/レスポンスの処理を担当
 * - 例: GET /users, POST /todos などのエンドポイントを定義
 * 
 * providers: ビジネスロジックを実装するプロバイダー
 * - @Injectable() デコレータを使用
 * - サービス、リポジトリ、ファクトリーなどを定義
 * - 再利用可能なビジネスロジックを実装
 * - 依存性注入（DI）システムの一部
 */
@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {} 