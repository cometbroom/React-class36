import "./error.css";

function Error(props) {
  return (
    <div className="error-box">
      <h2>{props.error}</h2>
    </div>
  );
}

export default Error;
