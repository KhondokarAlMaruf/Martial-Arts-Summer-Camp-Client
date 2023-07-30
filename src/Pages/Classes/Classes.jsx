import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
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

  const handleBookClass = (classs) => {
    // console.log(classs);
    const bookClass = {
      studentName: user?.displayName,
      studentEmail: user?.email,
      classId: classs._id,
      classImage: classs.classImage,
      className: classs.className,
      enrolledStudent: classs.enrolledStudent,
      instructorEmail: classs.instructorEmail,
      instructorName: classs?.instructorName,
      price: classs.price,
      seats: classs.seats,
      status: classs.status,
    };
    console.log(bookClass);
    fetch("http://localhost:5000/book-class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookClass),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You have already booked this class.");
        }
      })
      .then((data) => {
        console.log(data);
        toast.success("Class booked Successfully");
        navigation("/dashboard/my-enrolled-class");
      })
      .catch((error) => {
        console.error("Error booking class:", error.message);
        toast.error(error.message);
      });
  };
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
            <p>status: {classs.status}</p>
            <p>enrolledStudent: {classs.enrolledStudent}</p>
            {user?.email ? (
              <button
                onClick={() => handleBookClass(classs)}
                className="btn btn-primary"
              >
                Book Now
              </button>
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
