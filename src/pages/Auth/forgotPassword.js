import '../../css/Auth/forgotPassword.css';
import { ForgotPasswordComponentLogic } from '../../logic/Auth/ForgotPasswordComponentLogic';
const ForgotPassword = () => {
  const { ToastContainer, handleForgotPass, loading, setEmail } =
    ForgotPasswordComponentLogic();

  return (
    <div className="forgot-password bg-slate-500 p-2 rounded">
      <form className="form" onSubmit={(e) => handleForgotPass(e)}>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="rounded text-white
          button
             bg-gradient-to-l
              from-red-300
              to-black-500"
        >
          {loading ? <span className="loader"></span> : ''}
          Search
        </button>
      </form>
      <ToastContainer autoClose={10000} />
    </div>
  );
};

export default ForgotPassword;
