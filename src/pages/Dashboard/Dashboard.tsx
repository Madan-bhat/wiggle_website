import "./Dashboard.css";

const data = [
  {
    name: "Madan",
    userImg: "",
    latest_message: "Nothing Special",
  },
  {
    name: "Unknown",
    userImg: "",
    latest_message: "Nothing Special",
  },
  {
    name: "Nothing",
    userImg: "",
    latest_message: "Nothing Special",
  },
  {
    name: "Experiment",
    userImg: "",
    latest_message: "Nothing Special",
  },
  {
    name: "No One",
    userImg: "",
    latest_message: "Nothing Special",
  },
];

function DashBoard() {
  return (
    <div className="container">
      <div className="userListContainer">
        <span className="title">Wiggle</span>
        {data.map((item, index) => (
          <></>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default DashBoard;
