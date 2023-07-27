import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const InstructorAddClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email, user.displayName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                name="classname"
                {...register("class-name", { required: true })}
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
                name="instructorname"
                {...register("instructorname", { required: true })}
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
                name="instructoremail"
                {...register("instructoremail", { required: true })}
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
