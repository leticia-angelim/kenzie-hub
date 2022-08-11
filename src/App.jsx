import Providers from "./contexts/UserContext";
import Global from "./styles/global";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <Providers>
      <Global />
      <Routes />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343B41",
          color: "#F8F9FA",
        }}
        autoClose={3000}
      />
    </Providers>
  );
};

export default App;
