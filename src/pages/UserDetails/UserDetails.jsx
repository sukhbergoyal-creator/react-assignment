import { useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext";


function UserDetails() {
  const { id } = useParams();

  const { users } = useContext(UsersContext);

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return <h2>Loading user...</h2>;
  }

  return (
    <div>
      <h1>User Details</h1>

      <p>
        <strong>Name:</strong>{" "}
        {user.firstName} {user.lastName}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user.email}
      </p>

      <p>
        <strong>Age:</strong>{" "}
        {user.age}
      </p>

      <p>
        <strong>Gender:</strong>{" "}
        {user.gender}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {user.phone}
      </p>

      <p>
        <strong>Blood Group:</strong>{" "}
        {user.bloodGroup}
      </p>
    </div>
  );
}

export default UserDetails;