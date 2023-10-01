import { UpdateUserInfoLogic } from '../../logic/Auth/UpdateUserInfoLogic';
const UpdateUserInfo = () => {
  const {
    ToastContainer,
    loading,
    setEmail,
    setName,
    setNewPassword,
    setPassword,
    setPasswordConfirm,
    updateInfo,
    name,
    email,
  } = UpdateUserInfoLogic();

  return (
    <div className="update-info bg-slate-600 p-2 rounded">
      <form className="form" onSubmit={(e) => updateInfo(e)}>
        <div className="holder grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="input-holder">
            <input
              type="text"
              required
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="input-holder">
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-holder">
            <input
              type="password"
              placeholder="Enter your old password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-holder">
            <input
              type="password"
              placeholder="Enter your new password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="validation absolute"></div>
          </div>
          <div className="input-holder">
            <input
              type="password"
              placeholder="Enter your passwordConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <div className="validation absolute"></div>
          </div>
          <div className="input-holder"></div>
          <div
            className="
          button
           md:m-x0
            mx-auto
           flex
           justify-center
           md:block
          "
          >
            <button
              className="
               my-1 
               bg-gradient-to-l
               from-red-300
               to-black-500
               text-white
               flex
               items-center
               justify-center 
               
              "
            >
              {loading ? <span className="loader"></span> : ''}
              save changes
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateUserInfo;
