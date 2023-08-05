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
      const res = await fetch(
        "https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/classes"
      );
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
    fetch(
      "https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/book-class",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookClass),
      }
    )
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
        navigation("/dashboard/my-selected-class");
      })
      .catch((error) => {
        console.error("Error booking class:", error.message);
        toast.error(error.message);
      });
  };
  // console.log(approvedClasses);
  return (
    <div>
      <h2 className="text-6xl text-center my-16 text-[#5c6465]">Our Classes</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {approvedClasses?.map((classs) => (
          <div
            key={classs._id}
            className="card w-96 h-fit bg-base-100 shadow-xl mx-auto "
          >
            <figure>
              <img src={classs.classImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {classs.className}</h2>
              <p>Instructor: {classs.instructorName}</p>
              <p>Available seats: {classs.seats}</p>
              <p>Price: {classs.price}</p>
              <p>Status: {classs.status}</p>
              <p>EnrolledStudent: {classs.enrolledStudent}</p>
            </div>

            {user?.email ? (
              <div className="card-actions justify-end mr-5 mb-5">
                <button
                  onClick={() => handleBookClass(classs)}
                  className="btn bg-[#CAD5E2]"
                >
                  Book Now
                </button>
              </div>
            ) : (
              <Link className="mb-5 ml-5" to="/login">
                Login to Admin/Istructor
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
