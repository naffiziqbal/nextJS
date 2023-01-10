import User from "../../Components/User";

const users = ({ users  }) => {
  return (
    <>
      {" "}
      <h2 className="text-4xl">All Users</h2>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default users;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  console.log(users);
  return {
    props: {
      users,
    },
  };
};
