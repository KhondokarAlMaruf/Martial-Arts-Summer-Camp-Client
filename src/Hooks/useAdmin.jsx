import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin?email=${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
