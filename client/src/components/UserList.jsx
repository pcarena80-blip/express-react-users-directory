import StatusMessage from "./StatusMessage";
import UserCard from "./UserCard";

function UserList({ users }) {
  if (users.length === 0) {
    return <StatusMessage>No matching users found.</StatusMessage>;
  }

  return (
    <ul className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
