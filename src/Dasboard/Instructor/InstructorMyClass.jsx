import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";

const InstructorMyClass = () => {
  const { user } = useContext(AuthContext);
  const fetchMyClasses = async (email) => {
    try {
      const res = await fetch(
        `https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/single-class?email=${encodeURIComponent(
          email
        )}`,
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

  if (!myClass || myClass.length === 0) {
    return (
      <div>
        <h2 className="text-center text-4xl">
          No classes added by this instructor.
        </h2>
      </div>
    );
  }

  if (!myClass[0].feedback) {
    myClass[0].feedback = [];
  }

  console.log(myClass[0].feedback[0]);
  return (
    <div>
      {myClass.length === 0 ? (
        <div>No classes added by this instructor.</div>
      ) : (
        <div>
          <h2 className="text-5xl text-center mb-7 text-[#5c6465]">My Class</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {myClass.map((classs) => (
              <div
                key={classs._id}
                className="card w-96 h-auto bg-base-100 shadow-xl mx-auto"
              >
                <figure>
                  <img src={classs.classImage} alt={classs.className} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Class Name: {classs.className}</h2>
                  <p>Instructor Name: {classs.instructorName}</p>
                  <p>Email: {classs.instructorEmail}</p>
                  <p>Available Seats: {classs.seats}</p>
                  <p>Price: ${classs.price}</p>
                  <p>Status: {classs.status}</p>
                  <p>Enrolled Students: {classs.enrolledStudent}</p>
                  <div>
                    {classs.feedback?.map((feedback, index) => (
                      <p key={index}>Feedback: {feedback}</p>
                    ))}
                  </div>
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
{
  /* <div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>; */
}
