function UserCard({ user }) {
  return (
    <li className="user-card">
      <div className="avatar" aria-hidden="true">
        {user.fullName.charAt(0)}
      </div>

      <div className="user-field">
        <span>User ID</span>
        <strong>{user.id}</strong>
      </div>

      <div className="user-field">
        <span>User Full Name</span>
        <strong>{user.fullName}</strong>
      </div>
    </li>
  );
}

export default UserCard;
