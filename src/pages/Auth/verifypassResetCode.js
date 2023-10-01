import '../../css/Auth/verifyPassResetCode.css';
import { VerifyPassResetCodeLogic } from '../../logic/Auth/VerifyPassResetCodeLogic';
const VerifyPassResetCode = () => {
  const { ToastContainer, handleVerifyPass, setResetCode, resetCode } =
    VerifyPassResetCodeLogic();
  return (
    <div className="verify-reset-code bg-slate-500 p-2 rounded">
      <form className="form" onSubmit={(e) => handleVerifyPass(e)}>
        <div className="input-holder">
          <input
            type="text"
            placeholder="Enter ResetCode"
            onChange={(e) => setResetCode(e.target.value)}
            className="text-center my-1"
          />
          <div
            className={`validation ${
              resetCode.length >= 6 ? 'valid' : 'wrong'
            }`}
          ></div>
        </div>
        <button
          className="
          block
          m-auto
          rounded 
          text-white
           bg-gradient-to-l
              from-red-300
              to-black-500"
        >
          verify
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default VerifyPassResetCode;
