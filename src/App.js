import "./App.css";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className=" text-center">
      {/* <h1 className="text-5xl text-black font-bold underline">
        Welcome to CUET
      </h1> */}
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
}

export default App;
