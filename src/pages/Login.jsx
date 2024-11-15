import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      const user = result.user;
      console.log("Sign in user information:", user);
      toast.success("Sign in succesfully");
      e.target.reset();
      navigate("/");
    });
  };
  return (
    <div>
      <div className="hero min-h-[calc(100vh-292px)]">
        <div className=" w-full max-w-lg shrink-0 shadow-2xl p-8">
          <h1 className="text-3xl font-bold py-3">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* Email Input Field*/}
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* Passwor Input Field */}
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* Login Button */}
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">
            New User? Please
            <Link
              to={`/register`}
              className="ml-2 text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
