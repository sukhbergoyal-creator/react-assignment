import useFetch from "../../hooks/useFetch";
import { getUsers } from "../../services/userService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "../../Components/UserForm";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";



function Users() {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch(getUsers);

  const [localUsers, setLocalUsers] = useState([]);






  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });




  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  const usersPerPage = 10;

  const filteredUsers = localUsers.filter((user) => {
    const fullName =
      `${user.firstName} ${user.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGender =
      genderFilter === "all" ||
      user.gender === genderFilter;

    const matchesAge =
      ageFilter === "all" ||
      (ageFilter === "under30" && user.age < 30) ||
      (ageFilter === "30to50" &&
        user.age >= 30 &&
        user.age <= 50) ||
      (ageFilter === "above50" && user.age > 50);

    return matchesSearch && matchesGender && matchesAge;
  });





  const sortedUsers = [...filteredUsers];
  if (sortBy === "ageAsc") {
    sortedUsers.sort((a, b) => a.age - b.age);
  }

  if (sortBy === "ageDesc") {
    sortedUsers.sort((a, b) => b.age - a.age);
  }

  if (sortBy === "phoneAsc") {
    sortedUsers.sort((a, b) =>
      a.phone.localeCompare(b.phone)
    );
  }

  if (sortBy === "phoneDesc") {
    sortedUsers.sort((a, b) =>
      b.phone.localeCompare(a.phone)
    );
  }





  const indexOfLastUser =
    currentPage * usersPerPage;

  const indexOfFirstUser =
    indexOfLastUser - usersPerPage;

  const currentUsers =
    sortedUsers.slice(
      indexOfFirstUser,
      indexOfLastUser
    );
  // const totalPages = Math.ceil(
  //   sortedUsers.length / usersPerPage
  // );





  if (isLoading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }


  function handleDelete(id) {
    confirmAlert({
      title: "Delete User",
      message:
        "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setLocalUsers(
              localUsers.filter(
                (user) => user.id !== id
              )
            );
          },
        },
        {
          label: "No",
        },
      ],
    });
  }

  function handleEditSave() {
    const updatedUsers = localUsers.map((user) => {
      if (user.id === selectedUser.id) {
        return selectedUser;
      }

      return user;
    });

    setLocalUsers(updatedUsers);

    setIsEditOpen(false);
  }



  function handleAddUser() {
    if (
      !newUser.firstName?.trim() ||
      !newUser.lastName?.trim() ||
      !newUser.email?.includes("@")
    ) {
      alert(
        "Please enter Valid Inputs"
      );

      return;
    }
    const userToAdd = {
      ...newUser,
      id: Date.now(),
      phone: "1234567890",
    };

    setLocalUsers([
      ...localUsers,
      userToAdd,
    ]);

    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
    });

    setIsAddOpen(false);
  }


  return (
    <div>
      <h1>Users</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        value={ageFilter}
        onChange={(e) => setAgeFilter(e.target.value)}
      >
        <option value="all">All Ages</option>
        <option value="under30">Under 30</option>
        <option value="30to50">30 to 50</option>
        <option value="above50">Above 50</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">No Sorting</option>
        <option value="ageAsc">Age Ascending</option>
        <option value="ageDesc">Age Descending</option>
        <option value="phoneAsc">Phone Ascending</option>
        <option value="phoneDesc">Phone Descending</option>
      </select>


      <button
        onClick={() => setIsAddOpen(true)}
      >
        Add User
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>
                {user.firstName} {user.lastName}
              </td>

              <td>{user.email}</td>

              <td style={{
                color: user.age < 50 ? "red" : "green",
              }}>{user.age}</td>

              <td>{user.gender}</td>

              <td>{user.phone}</td>

              <td>
                <Link to={`/users/${user.id}`}>
                  View
                </Link>

                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setIsEditOpen(true);
                  }}
                >
                  Edit
                </button>

                <button onClick={() =>
                  handleDelete(user.id)
                }>
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div>
        <button onClick={() => setCurrentPage(1)}>
          1
        </button>

        <button onClick={() => setCurrentPage(2)}>
          2
        </button>

        <button onClick={() => setCurrentPage(3)}>
          3
        </button>

        <button onClick={() => setCurrentPage(4)}>
          4
        </button>

        <button onClick={() => setCurrentPage(5)}>
          5
        </button>

        <button onClick={() => setCurrentPage(6)}>
          6
        </button>
      </div>




      {isEditOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <h2>Edit User</h2>

          <UserForm
            userData={selectedUser}
            setUserData={setSelectedUser}
          />

          <br />
          <br />

          <button
            onClick={() => setIsEditOpen(false)}
          >
            Close
          </button>

          <button onClick={handleEditSave}>
            Save
          </button>
        </div>
      )}

      {isAddOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <h2>Add User</h2>

          <UserForm
            userData={newUser}
            setUserData={setNewUser}
          />

          <br />
          <br />

          <button
            onClick={() => setIsAddOpen(false)}
          >
            Close
          </button>

          <button onClick={handleAddUser}>
            Save
          </button>
        </div>
      )}





    </div>
  );
}

export default Users;