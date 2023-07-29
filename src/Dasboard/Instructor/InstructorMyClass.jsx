import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";

const InstructorMyClass = () => {
  const { user } = useContext(AuthContext);
  const fetchMyClasses = async (email) => {
    try {
      const res = await fetch(
        `http://localhost:5000/single-class?email=${encodeURIComponent(email)}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const { data: myClass = [], isLoading } = useQuery(
    ["myClass", user?.email],
    () => fetchMyClasses(user?.email)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <h2>loading</h2>;
  }
  console.log(myClass[0].feedback[0]);
  return (
    <div>
      {myClass.length === 0 ? (
        <div>No classes added by this instructor.</div>
      ) : (
        <div>
          <h2>My Class</h2>
          <div className="grid grid-cols-3 gap-4">
            {myClass?.map((classs) => (
              <div key={classs._id} className="p-4 border border-gray-300">
                <img
                  src={classs.classImage}
                  alt={classs.className}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <p className="text-lg font-bold">{classs.className}</p>
                <p className="text-gray-600">{classs.instructorName}</p>
                <p className="text-gray-600">{classs.instructorEmail}</p>
                <p className="text-gray-600">{classs.seats}</p>
                <p className="text-gray-600">{classs.price}</p>
                <p className="text-gray-600">{classs.status}</p>
                <p className="text-gray-600">{classs.enrolledStudent}</p>
                <div>
                  {classs.feedback?.map((feedback, index) => (
                    <p key={index}>Feedback: {feedback}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorMyClass;
