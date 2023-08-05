import { useEffect, useState } from "react";

const useStudent = (email) => {
  const [isStudent, setStudent] = useState(false);
  const [studentLoading, setStudentLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/student?email=${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setStudent(data.isStudent);
          setStudentLoading(false);
        });
    }
  }, [email]);
  return [isStudent, studentLoading];
};

export default useStudent;
