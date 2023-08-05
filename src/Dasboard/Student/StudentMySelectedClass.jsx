import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillCheckCircle } from "react-icons/ai";

const StudentMySelectedClass = () => {
  const { user } = useContext(AuthContext);

  const { data: myBookClass = [], isLoading } = useQuery({
    queryKey: ["myBookClass"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/book-class?email=${user?.email}`,
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

  return (
    <div>
      <h2 className="text-6xl text-center mb-7 text-[#5c6465]">
        My Enrolled class
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
              <p>Enrolled Student: {classs.enrolledStudent}</p>
              <p className="font-bold ml-36 text-5xl text-green-600">
                <AiFillCheckCircle></AiFillCheckCircle>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentMySelectedClass;
