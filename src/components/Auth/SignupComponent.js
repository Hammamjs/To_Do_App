import { Link } from 'react-router-dom';
import { SiginupComponentLogic } from '../../logic/Auth/siginupComponentLogic';
export const SignupComponent = () => {
  const {
    ToastContainer,
    email,
    userNameRef,
    loading,
    name,
    password,
    setEmail,
    setName,
    passwordConfirm,
    setPassword,
    setPasswordConfirm,
    onSubmit,
  } = SiginupComponentLogic();
  return (
    <div className="signup">
      <div className="container p-3  flex justify-center items-center">
        <div className="signin-box bg-slate-500 p-2">
          <h5 className="py-3 text-white">
            Start Your <span>Tasks</span>
          </h5>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="input-holder">
              <input
                type="text"
                placeholder="Enter your name"
                ref={userNameRef}
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full"
              />
              <div className={`progress ${name ? 'fw' : ''}`}></div>
            </div>
            <div className="input-holder">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full"
              />
              <div className={`progress ${email ? 'fw' : ''}`}></div>
            </div>
            <div className="input-holder">
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full"
              />
              <div className={`progress ${password ? 'fw' : ''}`}></div>
            </div>
            <div className="input-holder">
              <input
                type="password"
                placeholder="Enter your passwordConfrim"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
                className="w-full"
              />
              <div className={`progress ${passwordConfirm ? 'fw' : ''}`}></div>
            </div>
            <button
              className="
              bg-gradient-to-l
              from-red-300
              to-black-500
              px-5
            btn
             flex
              items-center
               justify-between
                 text-white
                  p-1
                    rounded
                     m-auto
                      my-2"
            >
              {loading ? <span className="loader"></span> : ''}
              Signup
            </button>
            <Link to="/signin" className="my-3">
              Do you have an account?
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupComponent;
