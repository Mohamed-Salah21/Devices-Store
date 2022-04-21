import { useContext } from "react";
import "./website-name.scss";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
const WebsiteName = () => {
  const { isDark, setSearching } = useContext(DataContext);
  return (
    <div className={` website-name ${isDark ? "dark-theme" : "light-theme"} `}>
      <div className="website-name-container">
        <Link to="/">
          <h1>Devices Store</h1>
        </Link>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearching(e.target.value)}
        />
      </div>
    </div>
  );
};
export default WebsiteName;
