import { useQuery } from "react-query";
import { IoIosMan } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";

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
  // console.log(allUser, refetch);

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
      refetch();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div>
      <div className="card shadow-2xl p-8 m-4 w-full">
        <h3 className="text-5xl text-center mb-7 text-[#5c6465]">All Users</h3>
        <div className="overflow-x-auto bg-slate-100">
          <table className="table w-full">
            <thead>
              <tr className="font-bold text-black">
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
                <th className="bg-red-100">Role</th>
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
                      <GrUserAdmin className="text-3xl" />
                    </button>
                  </td>
                  <td
                    onClick={() => updateRoleInBackend(user._id, "instructor")}
                  >
                    <button>
                      <IoIosMan className="text-3xl " />
                    </button>
                  </td>

                  <td className="bg-red-100">{user?.role}</td>
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
