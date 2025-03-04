# NestJS Todo API with Docker

Dockerを使用してNestJSとPostgreSQLで構築したTodoアプリケーションのAPI

## プロジェクト構成

## 技術スタック

- **Backend Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Container**: Docker & Docker Compose
- **API Documentation**: OpenAPI (Swagger)

## 機能

- TodoのCRUD操作
- PostgreSQLによるデータ永続化
- Dockerによる環境構築
- OpenAPIによるAPI仕様書

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
```bash
# .env.exampleを.envにコピー
cp .env.example .env
```

`.env`ファイルの内容を確認し、必要に応じて以下の値を設定：
```env
DATABASE_URL="postgresql://postgres:postgres@postgres:5432/nestjs_db?schema=public"
NODE_ENV=development
PORT=3000
```

3. アプリケーションの起動
```bash
docker-compose up --build
```
```

これにより、`.env`ファイルの設定手順がより明確になります。

## APIエンドポイント

### Todo API

- `GET /todo` - すべてのTodoを取得
- `POST /todo` - 新しいTodoを作成
- `GET /todo/:id` - 特定のTodoを取得
- `PATCH /todo/:id` - Todoを更新
- `DELETE /todo/:id` - Todoを削除

詳細なAPI仕様は[app/README.md](app/README.md)を参照してください。

## 開発

### アプリケーションの起動

```bash
# 開発環境で起動
docker-compose up --build

# バックグラウンドで起動
docker-compose up -d

# ログの確認
docker-compose logs -f

# アプリケーションの停止
docker-compose down
```

### データベース操作

```bash
# マイグレーションの実行
docker-compose exec app npx prisma migrate dev

# シードデータの投入
docker-compose exec app npx prisma db seed

# Prismaクライアントの生成
docker-compose exec app npx prisma generate
```

### アプリケーションのビルド

```bash
# アプリケーションのビルド
docker-compose exec app npm run build

# 開発モードでの起動
docker-compose exec app npm run start:dev
```

## 環境変数

| 変数名 | 説明 | デフォルト値 |
|--------|------|--------------|
| DATABASE_URL | データベース接続URL | postgresql://postgres:postgres@postgres:5432/nestjs_db?schema=public |
| NODE_ENV | 実行環境 | development |
| PORT | アプリケーションのポート | 3000 |

## ライセンス

MIT

## 作者

[Your Name]

## 貢献

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
