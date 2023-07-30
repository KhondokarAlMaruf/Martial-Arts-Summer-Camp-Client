import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

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
      <h2>My enrolled class</h2>
      <div className="grid grid-cols-3 gap-4">
        {myBookClass?.map((classs) => (
          <div key={classs._id} className="p-4 border border-gray-300">
            <h3>{classs.className}</h3>
            <p>student name: {classs.studentName}</p>
            <p>student email: {classs.studentEmail}</p>
            <p>Instructor: {classs.instructorName}</p>
            <p>Email: {classs.instructorEmail}</p>
            <p>seats: {classs.seats}</p>
            <p>price: {classs.price}</p>
            <p>status: {classs.status}</p>
            <p>enrolledStudent: {classs.enrolledStudent}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleDeleteClass(classs._id)}
                className="btn btn-error"
              >
                Delete
              </button>
              <button className="btn btn-primary">Pay</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClass;
