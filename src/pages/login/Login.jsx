import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./login.css";
import Aos from "aos";

const LoginPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://heshamdev-001-site1.gtempurl.com/api/Authenticate/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        console.log(`Logged in as ${response.data.userName}`);
        console.log(`User role is ${response.data.UserRoles[0]}`);
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/dates");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login">
      <div className="login-container container">
        <form onSubmit={submit}>
          <div className="form-group">
            <input
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="pass"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
