import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const { data: approvedAllClasses, isLoading } = useQuery(
    "approvedClasses",
    async () => {
      const res = await fetch("http://localhost:5000/classes");
      const data = await res.json();
      return data;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const approvedClasses = approvedAllClasses.filter(
    (classs) => classs.status === "approved"
  );

  if (approvedClasses.length === 0) {
    return <div>No approved classes found.</div>;
  }

  // console.log(approvedClasses);
  return (
    <div>
      <h2>Approved Classes</h2>
      <div className="grid grid-cols-3 gap-4">
        {approvedClasses?.map((classs) => (
          <div key={classs._id} className="p-4 border border-gray-300">
            <h3>{classs.className}</h3>
            <p>Instructor: {classs.instructorName}</p>
            <p>Email: {classs.instructorEmail}</p>
            <p>seats: {classs.seats}</p>
            <p>price: {classs.price}</p>
            <p>price: {classs.status}</p>
            {user?.email ? (
              <button>Book Now</button>
            ) : (
              <Link to="/login">Login to Admin/Istructor</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
