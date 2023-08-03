import { useEffect, useState } from "react";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    //  "instructor" from the backend
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

  // console.log(instructors);

  return (
    <div>
      <h2 className="text-6xl text-center my-16 text-[#5c6465]">
        Our Popular Instructors
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {instructors?.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-96 h-96 bg-base-100 shadow-xl mx-auto"
          >
            <figure>
              <img src={instructor.photo} alt={instructor.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Instructor Name: {instructor.name}</h2>
              <p>Email: {instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
