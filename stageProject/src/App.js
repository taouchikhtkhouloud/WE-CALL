import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/userlist/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContextProvider} from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import RechargeList from "./pages/userlist/RechargeList";
import ChannelList from "./pages/userlist/ChannelList";

import NewRecharge from "./pages/new/NewRecharge";
import NewChannel from "./pages/new/NewChannel";
import DestList from "./pages/userlist/DestList";
import NewDest from "./pages/new/NewDest";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
                        <Route path="home" element={<ProtectedRoute> <Home /></ProtectedRoute>} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path="single/:userID" element={<Single />} />

              <Route
                path="new"
                element={<New  title="Add New User" />}
              />
            </Route>
            <Route path="recharges">
              <Route index element={<RechargeList />} />

              <Route
                path="new"
                element={<NewRecharge  title="Add New Recharge" />}
              />
            </Route>
            <Route path="channel">
              <Route index element={<ChannelList />} />

              <Route
                path="new"
                element={<NewChannel  title="Add New Channel" />}
              />
            </Route>
            <Route path="dest">
              <Route index element={<DestList />} />

              <Route
                path="new"
                element={<NewDest  title="Add New Destination" />}
              />
            </Route>
            <Route path="abonnes">
              <Route index element={<List />} />
              <Route path=":abonneId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
