import "./NavBar.css";
import { Video, Phone } from "react-feather";

const Navbar = (props: any) => {
  console.log(props);

  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img className="userImg" src={props?.avatar} />
        <div className="userInfoContainer">
          <strong>
            <span className="name">{props?.user?.name}</span>
          </strong>
          <span className="name">{props?.user?.status}</span>
        </div>
      </div>
      <div>
        <Video className="icon" />
        <Phone className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
