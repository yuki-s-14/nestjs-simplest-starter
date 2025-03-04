# Todo API

NestJSとPrismaを使用したTodoアプリケーションのAPI

## 技術スタック

- NestJS
- PostgreSQL
- Prisma ORM
- Docker

## 環境構築

### 必要条件

- Docker
- Docker Compose

### セットアップ

1. リポジトリをクローン
```bash
git clone <repository-url>
cd <repository-name>
```

2. 環境変数の設定
`.env`ファイルを作成し、以下の内容を設定：
```env
DATABASE_URL="postgresql://postgres:postgres@postgres:5432/nestjs_db?schema=public"
NODE_ENV=development
PORT=3000
```

3. アプリケーションの起動
```bash
docker-compose up --build
```

## API仕様

### エンドポイント

#### GET /todo
すべてのTodoを取得

**レスポンス**
```json
[
  {
    "id": 1,
    "title": "タスク名",
    "start": "2024-03-20T00:00:00Z",
    "end": "2024-03-25T00:00:00Z",
    "status": 0,
    "priority": 1
  }
]
```

#### POST /todo
新しいTodoを作成

**リクエストボディ**
```json
{
  "title": "タスク名",
  "start": "2024-03-20T00:00:00Z",
  "end": "2024-03-25T00:00:00Z",
  "status": 0,
  "priority": 1
}
```

**ステータス**
- status: 0=未着手, 1=進行中, 2=完了
- priority: 0=低, 1=中, 2=高

#### GET /todo/:id
特定のTodoを取得

#### PATCH /todo/:id
Todoを更新

**リクエストボディ**
```json
{
  "title": "更新後のタスク名",
  "start": "2024-03-20T00:00:00Z",
  "end": "2024-03-25T00:00:00Z",
  "status": 1,
  "priority": 2
}
```

#### DELETE /todo/:id
Todoを削除

### データモデル

#### Todo
```typescript
{
  id: number;      // 一意のID
  title: string;   // タスク名
  start: Date;     // 開始日時
  end: Date;       // 終了日時
  status: number;  // ステータス
  priority: number;// 優先度
}
```

## APIドキュメント

Swagger UIでAPIドキュメントを確認できます：
- URL: http://localhost:3000/api
- OpenAPI定義: `openapi.yml`

## 開発

### ディレクトリ構造
