import Db from "../db"

import { Resolvers } from "./resolvers-types.generated"
import queryTwitterResolver from "./Query"

export interface TwitterResolverContext {
  db: Db
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolver,
}

export default resolvers
