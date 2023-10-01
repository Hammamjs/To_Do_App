import { Link } from 'react-router-dom';
import { SigninComponentLogic } from '../../logic/Auth/signinComponentLogic';
export const SigninComponent = () => {
  const {
    email,
    handleOnsubmit,
    loading,
    ToastContainer,
    pwd,
    setEmail,
    setPwd,
    emailRef,
  } = SigninComponentLogic();

  return (
    <div className="signin">
      <div className="container p-3  flex justify-center items-center">
        <div className="signin-box bg-slate-500 p-2">
          <h5 className="py-3 text-white">Start Your Tasks</h5>
          <form className="form" onSubmit={(e) => handleOnsubmit(e)}>
            <div className="input-holder">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                placeholder="Enter your email"
                className="w-100"
              />
              <div className={`progress ${email ? 'fw' : ''}`}></div>
            </div>
            <div className="input-holder">
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPwd(e.target.value)}
              />
              <div className={`progress ${pwd ? 'fw' : ''}`}></div>
            </div>
            <Link to="/forgotPassword" className="forgot-password">
              Forgot password ?
            </Link>
            <button
              className={`btn
              bg-gradient-to-l
              from-red-300
              to-black-500
               flex
               px-5
                items-center
                 justify-between
                   text-white
                    rounded
                     m-auto my-2
               ${loading ? 'disabled' : ''}
               `}
            >
              {loading ? <span className="loader"></span> : ''}
              Signin
            </button>
            <Link to="/signup">Don't have an account?</Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
