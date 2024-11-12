import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Register User information:", user);
        toast.success("Registerd Succesfully");
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => console.log("ERROR:", error.message));
  };
  return (
    <div>
      <div className="hero min-h-[calc(100vh-292px)]">
        <div className=" w-full max-w-lg shrink-0 shadow-2xl p-8">
          <h1 className="text-3xl font-bold py-3">Sign up</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              {/* Name Input Field*/}
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
              {/* Sign up  Button */}
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account? Please
            <Link to={`/login`} className="ml-2 text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
