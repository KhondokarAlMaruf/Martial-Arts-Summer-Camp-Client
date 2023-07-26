import { useQuery } from "react-query";
import { FaUserSecret } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const AllUsers = () => {
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(allUser, refetch);

  // Function to update the role for a single user in the backend
  const updateRoleInBackend = async (userId, role) => {
    console.log(userId, role);
    try {
      await fetch(`http://localhost:5000/users/role/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ role }),
      });

      // After successful update, refetch the data to get updated roles
      refetch();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div>
      <div className="card shadow-2xl p-8 m-4 w-full">
        <h3 className="text-2xl mb-4">All Users</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Buyer Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {allUser?.map((user, i) => (
                <tr key={user._id}>
                  <td>{i + 1}</td>
                  <td className="px-3">{user?.name}</td>
                  <td>{user?.email}</td>
                  <td onClick={() => updateRoleInBackend(user._id, "admin")}>
                    <button>
                      <FaUserSecret />
                    </button>
                  </td>
                  <td
                    onClick={() => updateRoleInBackend(user._id, "instructor")}
                  >
                    <button>
                      <GiTeacher />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
