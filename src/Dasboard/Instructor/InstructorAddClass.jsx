import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const InstructorAddClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email, user.displayName);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const classes = {
      className: data.classname,
      classImage: data.classimage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      seats: data.seats,
      price: data.price,
      status: "pending",
      enrolledStudent: 0,
    };
    console.log(classes);
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classes),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          fetch(`http://localhost:5000/jwt?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
              }
            });
          navigate("/dashboard/my-class");
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl text-center mb-7 text-[#5c6465]">Add Class</h2>
      <div className="hero min-h-screen bg-base-200 py-8">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                name="classname"
                {...register("classname", { required: true })}
                type="text"
                placeholder="Class name"
                className="input input-bordered"
              />
              {errors.classname && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                name="classimage"
                {...register("classimage", { required: true })}
                type="text"
                placeholder="Class Image"
                className="input input-bordered"
              />
              {errors.classimage && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor name </span>
              </label>
              <input
                value={user.displayName}
                type="text"
                placeholder="Instructor name "
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor email </span>
              </label>
              <input
                value={user.email}
                type="text"
                placeholder="Instructor email "
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>
              <input
                name="seats"
                {...register("seats", { required: true })}
                type="text"
                placeholder="Available seats"
                className="input input-bordered"
              />
              {errors.seats && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input
                name="price"
                {...register("price", { required: true })}
                type="text"
                placeholder="price"
                className="input input-bordered"
              />
              {errors.price && <span>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn " type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstructorAddClass;
