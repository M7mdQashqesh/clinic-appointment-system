import "./headerComponent.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HeaderComponent = () => {
  return (
    <div className="header-component">
      <div className="container">
        <div className="logo">
          <img src="/logo.webp" alt="logo" />
        </div>
        <div className="logout">
          <KeyboardArrowUpIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
