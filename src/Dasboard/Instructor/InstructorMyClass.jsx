import { useQuery } from "react-query";

const InstructorMyClass = () => {
  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["myClass"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/classes`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(myClass);
  return (
    <div>
      <h2>My Class</h2>
      <div className="grid grid-cols-3 gap-4">
        {myClass.map((classs) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorMyClass;
