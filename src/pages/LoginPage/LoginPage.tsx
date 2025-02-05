import LoginComponent from "../../components/login-component/LoginComponent";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="image">
        <img src="/doctor-login.svg" alt="doctor" />
      </div>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
