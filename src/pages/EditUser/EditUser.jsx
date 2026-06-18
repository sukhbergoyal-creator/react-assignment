
import { useState, useEffect } from "react";
import { getUserById } from "../../services/userService";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext";
import { useParams, useNavigate } from "react-router-dom";

function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null)
    const {
        users: contextUsers,
        setUsers,
    } = useContext(UsersContext);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    useEffect(() => {
        async function loadUser() {
            const userData = await getUserById(id);

            setUser(userData);
            setFormData({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
            });
        }

        loadUser();
    }, [id]);

    if (!user) {
        return <h2>Loading user...</h2>;
    }




    function handleSave() {
        const updatedUsers = contextUsers.map(
            (user) => {
                if (user.id === Number(id)) {
                    return {
                        ...user,
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                    };
                }

                return user;
            }
        );

        setUsers(updatedUsers);
        navigate("/users");
    }

    return (
        <div>
            <h1>Edit User</h1>

            <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        firstName: e.target.value,
                    })
                }
            />

            <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        lastName: e.target.value,
                    })
                }
            />

            <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value,
                    })
                }
            />
            <button onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default EditUser;