import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch the list of users with role "instructor" from the backend
    fetch("http://localhost:5000/users/role?role=instructor", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error("Error fetching instructors:", error);
      });
  }, []);

  console.log(instructors);

  return (
    <div>
      <h2>This is instructors</h2>
      <div className="grid grid-cols-3 gap-4">
        {instructors?.map((instructor) => (
          <div key={instructor._id} className="p-4 border border-gray-300">
            <img
              src={instructor.photo}
              alt={instructor.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-bold">{instructor.name}</p>
            <p className="text-gray-600">{instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
