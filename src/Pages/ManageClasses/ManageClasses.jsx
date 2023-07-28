import { useQuery } from "react-query";

const ManageClasses = () => {
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
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
  console.log(allClasses);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>##</th>
              <th>Image</th>
              <th>class Name</th>
              <th>Instructor</th>
              <th>email</th>
              <th>Available Seats</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((cls, i) => (
              <tr key={cls._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cls.classImage} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cls.className}</td>
                <td>{cls.instructorName}</td>
                <td>{cls.instructorEmail}</td>
                <td>{cls.seats}</td>
                <td>{cls.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
