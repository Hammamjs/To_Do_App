import '../../css/Auth/resetPassword.css';
import { ResetPasswordComponentLogic } from '../../logic/Auth/ResetPasswordComponentLogic';
const ResetPassword = () => {
  const { handleResetPass, loading, setEmail, setNewPassword, ToastContainer } =
    ResetPasswordComponentLogic();

  return (
    <div className="reset-password bg-slate-500 p-2 rounded py-3">
      <form className="form" onSubmit={(e) => handleResetPass(e)}>
        <div className="input-holder">
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="validate"></div>
        </div>
        <div className="input-holder">
          <input
            type="password"
            placeholder="Enter new password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="validate"></div>
        </div>
        <button
          className="text-white rounded
               bg-gradient-to-l
               from-red-300
               p-1
               px-3
               flex
               items-center 
               justify-between
               m-auto"
        >
          {loading ? <span className="loader"></span> : ''}
          Save changes
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
