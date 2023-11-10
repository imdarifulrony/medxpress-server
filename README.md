# MedXpress - Server <img src="./miscellaneous/icons/nestjs.svg" width="30" title="NestJS Logo">

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Database Setup](#database-setup)
  - [Server Setup](#server-setup)
- [Defined Routes](#defined-routes)
  - [Customer Routes](#customer-routes)
  - [Shop Routes](#shop-routes)
  - [Payment Routes](#payment-routes)
  - [Medicine Routes](#medicine-routes)
  - [Orders Routes](#orders-routes)
  - [Stocks Routes](#stocks-routes)
- [Documentation](#documentation)
- [Client Side](#client-side)

## Overview

MedXpress Server is built using [Nest JS](https://docs.nestjs.com/) and utilizes [PNPM](https://pnpm.io/) as the package manager. If you prefer [NPM](https://www.npmjs.com/), delete the [pnpm-lock.yaml](./pnpm-lock.yaml) file and run `npm install` to generate `package-lock.json`.

## Getting Started

### Database Setup

1. Navigate to [/miscellaneous/medxpress-database-collection/](/miscellaneous/medxpress-database-collection/)
2. Run `pnpm install` to install dependencies.
3. Insert medicine data into MongoDB by running `node ./intert_to_mongodb.js`.
4. Remove duplicate medicine data with `node ./find_and_delete_duplicate_data_mongodb.js`.

### Server Setup

1. Go back to the [root folder](./) and run `pnpm install`.
2. Start the server with `pnpm start:dev`. It will run on port `3001`.

## Defined Routes

### Customer Routes

- Create new customer: **POST** `/auth/signup`
- Customer login: **POST** `/auth/login`
- Get single customer: **GET** `/auth/user/:id`
- Find duplicate customer email: **POST** `/auth/check-email`

### Shop Routes

- Create new shop: **POST** `/auth/register-shop`
- Shop login: **POST** `/auth/login-shop`
- Get all shops: **GET** `/auth/shops`
- Get specific shop: **GET** `/auth/shop/:id`

### Payment Routes

- Payment route: **POST** `/checkout`

### Medicine Routes

- Get all medicines: **GET** `/medicines/find`
- Get medicine by ID: **GET** `/medicines/:id`
- Create new medicine: **POST** `/medicines/`
- Update a medicine: **PUT** `/medicines/:id`
- Delete a medicine: **DELETE** `/medicines/:id`

### Orders Routes

- Create new order: **POST** `/orders`
- Get all orders: **POST** `/orders`
- Get single order by order id: **GET** `/orders/:id`
- Update order by order id: **PUT** `/orders/:id`
- Delete order by order id: **DELETE** `/orders/:id`
- Get orders by userId: **GET** `/orders/user/:userId`

### Stocks Routes

- Create Stock: **POST** `/stocks`
- Get all stocks: **GET** `/stocks`
- Get stocks by shop id: **GET** `/stocks/shop/:shopId`
- Get stock by stock id: **GET** `/stocks/:stockId`
- Update stock: **POST** `/stocks/:stockId`
- Delete stock: **DELETE** `/stocks/:stockId`
- Search Stock by Medicine: **GET** `/stocks/search/medicine`
- Search stocks by medicine and shop id: **GET** `/search/medicine-and-shop`

## Documentation

Read the full documentation for the MedXpress Server [here](https://imdariful.github.io/medxpress-server/).

## Client Side

Explore the [MedXpress - Client Side](https://github.com/imdariful/medxpress-client) repository.
