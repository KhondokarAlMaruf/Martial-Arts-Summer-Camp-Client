import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/classes`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(allClasses, refetch);

  const updateStatusInBackend = async (userId, status) => {
    try {
      await fetch(`http://localhost:5000/status/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ status }),
      });
      refetch();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>##</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((cls, i) => (
              <tr key={cls._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cls.classImage} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cls.className}</td>
                <td>{cls.instructorName}</td>
                <td>{cls.instructorEmail}</td>
                <td className="text-right">{cls.seats}</td>
                <td className="text-right">{cls.price}</td>
                <td>{cls.status}</td>
                {cls?.status === "approved" ? (
                  <button disabled>Approve</button>
                ) : (
                  <button
                    onClick={() => updateStatusInBackend(cls._id, "approved")}
                  >
                    Approve
                  </button>
                )}
                {cls?.status === "denied" ? (
                  <button disabled>Deny</button>
                ) : (
                  <button
                    onClick={() => updateStatusInBackend(cls._id, "denied")}
                  >
                    Deny
                  </button>
                )}

                <td>
                  <Link to={`/dashboard/send-feedback/${cls._id}`}>
                    Send Feedback
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
