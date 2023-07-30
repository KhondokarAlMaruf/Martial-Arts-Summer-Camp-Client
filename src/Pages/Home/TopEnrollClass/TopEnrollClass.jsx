import { useQuery } from "react-query";

const TopEnrollClass = () => {
  const { data: topEnrolledClasses, isLoading } = useQuery(
    "topEnrolledClasses",
    async () => {
      const res = await fetch("http://localhost:5000/top-enroll-class");
      const data = await res.json();
      return data;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //   console.log(topEnrolledClasses);

  return (
    <div>
      <h2>top enroll student</h2>
      <div className="grid grid-cols-3 gap-4">
        {topEnrolledClasses.map((classs) => (
          <div key={classs._id} className="p-4 border border-gray-300">
            <h3>{classs.className}</h3>
            <p>Instructor: {classs.instructorName}</p>
            <p>Email: {classs.instructorEmail}</p>
            <p>Seats: {classs.seats}</p>
            <p>Price: {classs.price}</p>
            <p>Enrolled Students: {classs.enrolledStudent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEnrollClass;
