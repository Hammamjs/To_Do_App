import NavBarLogic from '../../logic/global/NavBarLogic';

const NavBar = () => {
  const { Link, handleLogout, isUserAuthenticated } = NavBarLogic();

  return (
    <div className="nav">
      <div className="nav bg-slate-500 p-3 shadow">
        <h4>To Do List</h4>
      </div>
      <ul className="list items-center justify-center p-1 flex bg-neutral-500 text-cyan-300">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="mx-1">
          {isUserAuthenticated ? (
            <button className="mx-2" onClick={handleLogout}>
              LogOut
            </button>
          ) : (
            <Link to="/signin">
              <button className=" p-1 px-2 ">Signin</button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
