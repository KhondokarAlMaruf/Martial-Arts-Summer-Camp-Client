import { useEffect, useState } from "react";

const useInstructor = (email) => {
  const [isInstructor, setIsInstructor] = useState(false);
  const [instructorLoading, setInstructorLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/instructor?email=${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsInstructor(data.isInstructor);
          setInstructorLoading(false);
        });
    }
  }, [email]);
  return [isInstructor, instructorLoading];
};

export default useInstructor;
