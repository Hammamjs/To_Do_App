import error from "../../assets/imgs/err.webp";
const NotFound = () => {
  return (
    <div className="404">
      <div className="img">
        <img src={error} alt="" />
        <p className="error">There is no data</p>
      </div>
    </div>
  );
};

export default NotFound;
