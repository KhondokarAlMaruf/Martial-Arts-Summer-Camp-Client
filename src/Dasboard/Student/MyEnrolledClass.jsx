import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const MyEnrolledClass = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myBookClass = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBookClass"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/book-class?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  // console.log(myBookClass);

  const handleDeleteClass = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete-class/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Deleted Item Successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-6xl text-center mb-7 text-[#5c6465]">
        My Selected class
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {myBookClass?.map((classs) => (
          <div
            key={classs._id}
            className="card w-96 bg-base-100 shadow-xl mx-auto"
          >
            <figure>
              <img src={classs.classImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {classs.className}</h2>
              <p>Student name: {classs.studentName}</p>
              <p>Student email: {classs.studentEmail}</p>
              <p>Seats: {classs.seats}</p>
              <p>Price: ${classs.price}</p>
              <p>Status: {classs.status}</p>
              <p>Enrolled Student: {classs.enrolledStudent}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteClass(classs._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
                <Link to="/dashboard/my-enrolled-class">
                  <button className="btn btn-primary">Pay</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClass;
