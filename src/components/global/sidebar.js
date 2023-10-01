import { SideBarLogic } from '../../logic/global/SideBarLogic';

const SideBar = ({ handleIsSideBar }) => {
  const { Authenticated, Link } = SideBarLogic();

  return Authenticated ? (
    <div className="side-bar text-start fixed p-3 bg-slate-600">
      <div className="icon" onClick={handleIsSideBar}>
        <i className="fa fa-bars mx-1"></i>
      </div>
      <ul className="list p-2">
        <li>
          <Link to="/updateInfo">Update user info</Link>
        </li>
        <li>
          <Link to="/addTask">Add Task</Link>
        </li>
      </ul>
    </div>
  ) : null;
};

export default SideBar;
