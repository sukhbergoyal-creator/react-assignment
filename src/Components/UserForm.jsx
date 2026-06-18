import { useState, useEffect } from "react";


function UserForm({
  userData,
  setUserData,
}) {

  const [showExtraFields, setShowExtraFields] = useState(false);
  const [errors, setErrors] = useState({});
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://dummyjson.com/users?limit=10"
      );

      const data = await response.json();

      setUsernames(data.users);
    }

    loadUsers();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={userData.firstName}
        onChange={(e) => {
          setUserData({
            ...userData,
            firstName: e.target.value,
          });


          setErrors({
            ...errors,
            firstName:
              e.target.value.trim() === ""
                ? "First Name is required"
                : "",
          });
        }}
      />
      {
        errors.firstName && (
          <p>{errors.firstName}</p>
        )
      }


      <br />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={userData.lastName}
        onChange={(e) => {
          setUserData({
            ...userData,
            lastName: e.target.value,
          });

          setErrors({
            ...errors,
            lastName:
              e.target.value.trim() === ""
                ? "Last Name is required"
                : "",
          });
        }}
      />

      {errors.lastName && (
        <p>{errors.lastName}</p>
      )}

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => {
          setUserData({
            ...userData,
            email: e.target.value,
          });

          setErrors({
            ...errors,
            email:
              e.target.value.includes("@")
                ? ""
                : "Enter a valid email",
          });
        }}
      />

      {errors.email && (
        <p>{errors.email}</p>
      )}

      <br />
      <br />

      <select
        value={userData.username || ""}
        onChange={(e) =>
          setUserData({
            ...userData,
            username: e.target.value,
          })
        }
      >
        <option value="">
          Select Username
        </option>

        {usernames.map((user) => (
          <option
            key={user.id}
            value={user.username}
          >
            {user.username}
          </option>
        ))}
      </select>

      <br />
      <br />

      <select
        value={userData.gender || ""}
        onChange={(e) =>
          setUserData({
            ...userData,
            gender: e.target.value,
          })
        }
      >
        <option value="">
          Select Gender
        </option>

        <option value="male">
          Male
        </option>

        <option value="female">
          Female
        </option>
      </select>

      <br />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={userData.age || ""}
        onChange={(e) =>
          setUserData({
            ...userData,
            age: e.target.value,
          })
        }
      />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={showExtraFields}
          onChange={() =>
            setShowExtraFields(
              (prev) => !prev
            )
          }
        />

        Show Extra Fields
      </label>


      {showExtraFields && (
        <>
          <br />
          <br />

          <input
            type="number"
            placeholder="Height"
            value={userData.height || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                height: e.target.value,
              })
            }
          />

          <br />
          <br />

          <input
            type="number"
            placeholder="Weight"
            value={userData.weight || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                weight: e.target.value,
              })
            }
          />
        </>
      )}

    </>
  );
}

export default UserForm;