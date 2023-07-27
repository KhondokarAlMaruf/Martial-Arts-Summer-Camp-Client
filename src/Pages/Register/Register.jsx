import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      toast.success("  Registration Successfully !");
      const userInfo = {
        displayName: data.name,
      };

      updateUser(userInfo)
        .then(() => {
          saveUserToDb(
            data.name,
            data.photo,
            data.email,
            data.password,
            data.account
          );
        })
        .catch((error) => {
          console.log(error.message);
        });

      navigate("/");
    });
  };
  const saveUserToDb = (name, photo, email, password, account) => {
    const user = {
      name,
      photo,
      email,
      password,
      role: account,
    };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          fetch(`http://localhost:5000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
              }
            });
          navigate("/");
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  name="photo-url"
                  {...register("photo", { required: true })}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo url is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    password must have 6 characters one Uppercase and one
                    special characters
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirm-password"
                  type="password"
                  placeholder="confirm-password"
                  className="input input-bordered"
                  // required
                />
              </div>
              <div className="form-control w-full max-w-xs my-4">
                <div className="input-group">
                  <select
                    {...register("account")}
                    className="select select-bordered"
                  >
                    <option value="student">Student</option>
                  </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn " type="submit" value="Register" />
              </div>

              <Link className="btn btn-active btn-link" to={"/login"}>
                Already Have an Account ? Please login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
