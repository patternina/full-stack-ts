import { QueryResolvers } from "./resolvers-types.generated"

import { TwitterResolverContext } from "./index"

const queryTwitterResolver: QueryResolvers<TwitterResolverContext> = {
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
  suggestions: (_, __, { db: _db }) => [
    {
      id: "124",
      name: "Morty Smith",
      handle: "mortysmith",
      avatarUrl: "http://localhost:3000/static/ts-logo.png",
      reason: "Because your his grandfather",
    },
    {
      id: "124",
      name: "Jerry Smith",
      handle: "jerrysmith",
      avatarUrl: "http://localhost:3000/static/jquery-logo.jpeg",
      reason: "Because his stupidity will make you laugh",
    },
  ],
}

export default queryTwitterResolver
