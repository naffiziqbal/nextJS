const User = ({ user }) => {
  const { name, address, username, email } = user;
  return (
    <div className="border border-violet-600 p-5 rounded bg-slate-600 text-white">
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <address>
        {address.street}, {address.suite},{address.city}
      </address>
    </div>
  );
};
export default User;
