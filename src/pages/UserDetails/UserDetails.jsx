import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";


function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const userData = await getUserById(id);

      setUser(userData);
    }

    loadUser();
  }, [id]);

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