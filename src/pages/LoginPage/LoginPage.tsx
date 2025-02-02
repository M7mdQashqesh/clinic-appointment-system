import "./loginPage.css";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="image">
        <img src="/doctor-login.svg" alt="doctor" />
      </div>
      <div className="form">
        <h1>Welcome!</h1>
        <form>
          <div className="email">
            <EmailIcon />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="password">
            <HttpsIcon />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
