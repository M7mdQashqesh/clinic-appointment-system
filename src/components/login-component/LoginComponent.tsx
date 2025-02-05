import "./loginComponent.css";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";

const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  e.preventDefault();
};

const LoginComponent = () => {
  return (
    <div className="login-component">
      <h1>Welcome!</h1>
      <form>
        <div className="email">
          <EmailIcon />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="password">
          <HttpsIcon />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            required
          />
        </div>
        <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
};

export default LoginComponent;
