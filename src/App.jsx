import Routes from "./routes";
import Global from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343B41",
          color: "#F8F9FA",
        }}
        autoClose={3000}
      />
    </>
  );
};

export default App;
