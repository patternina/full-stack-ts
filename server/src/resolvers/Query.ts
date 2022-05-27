const queryTwitterResolver = {
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
}

export default queryTwitterResolver
