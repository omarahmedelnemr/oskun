import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import HomePage from './Pages/Home';
import './components/FontawesomeIcons'
import BackendLink from './backendLink';
import FavoritePage from './Pages/Favorite';
import HistoryPage from './Pages/History';
import PropInfoPage from './Pages/PropInfo';
import ProfilePage from './Pages/Profile';
import InfoChange from './Pages/infoChange';
import PasswordChange from './Pages/passwordChange';
import AddProp from './Pages/AddProp';
// require('dotenv').config()
import {BrowserView, MobileView} from 'react-device-detect';
import MobileBlock from './Pages/MobileBlock';


function App() {
  return (
    // <UserContextProvider>
    <Router>
      
    <Helmet>
      <title>OSKUN</title>
    </Helmet>
    <BrowserView>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/student" />}/> */}
        <Route path="/login" exact element={<LoginPage />}/>
        <Route path="/register" exact element={<RegisterPage />}/>
        <Route path="/forgotpassword" exact element={<ForgotPassword />}/>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/home" exact element={<HomePage />}/>
        <Route path="/favorite" exact element={<FavoritePage />}/>
        <Route path="/history" exact element={<HistoryPage />}/>
        <Route path="/prop/:propID" exact element={<PropInfoPage />}/>
        <Route path="/profile" exact element={<ProfilePage />}/>
        <Route path="/profile/change" exact element={<InfoChange />}/>
        <Route path="/profile/passwordchange" exact element={<PasswordChange />}/>
        <Route path="/addProp" exact element={<AddProp />}/>
      </Routes>
    </BrowserView>
    <MobileView>
      <MobileBlock />
    </MobileView>
  </Router>
  // {/* </UserContextProvider> */}
  );
}

export default App;
