import { Application } from "express";
import { GraphQLSchema } from "graphql";
import { Server } from "http";
import { BaseContext } from "@apollo/server";
import { createDataLoaders } from "src/dataloaders";
import { AdminUserDocument } from "../adminUser";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      token?: string;
      admin?: AdminUserDocument;
      clientApp: ClientApp;
      rawBody?: string;
    }
  }
}

export type Defined<T> = T extends undefined | null ? never : T;

export type DefinedProperties<T> = {
  [K in keyof T]: Defined<T[K]>;
};

export type DataLoaderMap = ReturnType<typeof createDataLoaders>;
export interface GraphqlContext extends BaseContext, DataLoaderMap {
  ip: string;
  admin?: AdminUserDocument;
  token?: string;
  clientApp?: ClientApp;
}

export interface CreateGraphQLSubscriptionSever {
  httpServer: Server;
  schema: GraphQLSchema;
}

export interface CreateGraphQLServer {
  app: Application;
  httpServer: Server;
  schema: GraphQLSchema;
}

export type EnumType = { [s: string]: unknown };

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface ClientApp {
  key: string;
  name: string;
  domain: string;
}

export interface SeoMetadataDocument {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImageId?: string;
}

export interface PaginationFilters {
  page?: number | string | null;
  limit?: number | string | null;
  search?: string;
}
