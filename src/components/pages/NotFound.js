import error from "../../assets/error.png";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>This is my NotFound page</h1>

      <img src={error} alt="error" className="error" /> 
      
    </div>
  );
}