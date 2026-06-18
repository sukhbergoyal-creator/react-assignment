export async function getUsers() {
  const response = await fetch(
    "https://dummyjson.com/users?limit=50"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  return data.users;
}

export async function getUserById(id) {
  const response = await fetch(
    `https://dummyjson.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const user = await response.json();

  return user;
}