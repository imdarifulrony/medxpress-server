# MedXpress - Server Side Code

Package Manager Used: PNPM

Listening Port: 3000

start the server using `pnpm start:dev`

## Connect with mongoose

installed required mongoose packages for connecting with database
`pnpm add mongoose @nestjs/mongoose @nestjs/config`

configure .env in app.module.ts

## Authentication

for authentication installed these packages

```bash
pnpm add @nestjs/passport passport passport-local
pnpm add -D @types/passport-local
pnpm add @nestjs/jwt
```

generate auth using these commands

```bash
nest g module auth
nest g controller auth --no-spec
nest g service auth --no-spec
pnpm add bcrypt
```

create user schema in auth named `user.schema.ts`

Configure passport in auth module
