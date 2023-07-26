import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully LogIn !!");
        navigate("/");
        data.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignInGoogle = () => {
    signInWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully LogIn !!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn " type="submit" value="Login" />
              </div>
              <div className="space-x-5 mx-auto">
                <button
                  onClick={handleSignInGoogle}
                  className="btn btn-outline btn-secondary"
                >
                  Google
                </button>
              </div>
              <Link className="btn btn-active btn-link" to={"/register"}>
                New Here ? Please register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
