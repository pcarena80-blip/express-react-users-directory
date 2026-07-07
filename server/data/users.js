const users = [
  { id: "1", fullName: "Steven" },
  { id: "2", fullName: "Hassan" },
  { id: "3", fullName: "Suham" },
];

function findAllUsers(search = "") {
  const normalizedSearch = search.trim().toLowerCase();

  if (!normalizedSearch) {
    return users;
  }

  return users.filter((user) =>
    user.fullName.toLowerCase().includes(normalizedSearch)
  );
}

function findUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  findAllUsers,
  findUserById,
};
