import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Logining from "./pages/Logining";
import Home from "./pages/Home";
import { checkToken } from "./api/auth";
import { useState } from "react";
import { useEffect } from "react";
import UserContext from "./context/UserContext";
import NavBar from "./components/NavBar";
import Transactions from "./pages/Transactions";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {/* {user ? <NavBar /> : <NavBarr />} */}

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/transactions" Component={Transactions} />
          {/* user ? <route home/> : <route not found/>  */}
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Logining} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
