const storedUser = sessionStorage.getItem("user");

let userId: string = "";

if (storedUser) {
  try {
    const user = JSON.parse(storedUser);
    if (user && typeof user.id === "string") {
      userId = user.id;
    }
  } catch (error) {
    console.error("Failed to parse user from sessionStorage:", error);
  }
}

export { userId };
