import * as express from "express"

import { Server } from "http"

import Db from "./db"

import { ApolloServer, ExpressContext, gql } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"

export async function createApolloServer(
  db: Db,
  app: express.Application,
  httpServer: Server
): Promise<ApolloServer<ExpressContext>> {
  const typeDefs = gql`
    type Query {
      currentUser: User!
      suggestions: [Suggestion!]!
    }

    type User {
      id: String!
      name: String!
      handle: String!
      coverUrl: String!
      avatarUrl: String!
      createdAt: String!
      updatedAt: String!
    }

    type Suggestion {
      name: String!
      handle: String!
      avatarUrl: String!
      reason: String!
    }
  `

  const resolvers = {
    Query: {
      currentUser: () => {
        return {
          id: "123",
          name: "Rick Sánchez",
          handle: "ricksanchez",
          coverUrl: "",
          avatarUrl: "",
          createdAt: "",
          updatedAt: "",
        }
      },
      suggestions: () => [],
    },
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  server.applyMiddleware({ app })

  return server
}
