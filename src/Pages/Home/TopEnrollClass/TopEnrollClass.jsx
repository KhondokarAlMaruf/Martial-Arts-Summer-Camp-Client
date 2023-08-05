import { useQuery } from "react-query";

const TopEnrollClass = () => {
  const { data: topEnrolledClasses, isLoading } = useQuery(
    "topEnrolledClasses",
    async () => {
      const res = await fetch(
        "https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/top-enroll-class"
      );
      const data = await res.json();
      return data;
    }
  );

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  // console.log(topEnrolledClasses);

  return (
    <div>
      <h2 className="text-6xl text-center my-16 text-[#5c6465]">
        Our Popular Classes
      </h2>
      <div className="grid  md:grid-cols-3 gap-4">
        {topEnrolledClasses.map((classs) => (
          <div
            key={classs._id}
            className="card w-96 h-fit bg-base-100 shadow-xl mx-auto"
          >
            <figure>
              <img src={classs.classImage} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {classs.className}</h2>
              <p>Instructor: {classs.instructorName}</p>
              <p>Email: {classs.instructorEmail}</p>
              <p>Seats: {classs.seats}</p>
              <p>Price: {classs.price}</p>
              <p>Enrolled Students: {classs.enrolledStudent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEnrollClass;
