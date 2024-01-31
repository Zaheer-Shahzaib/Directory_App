import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomePage from './Pages/Home';
import Login from './Components/login';

import { BrowserRouter as Router, Switch, Route, Routes,  } from "react-router-dom";
import SignUp from './Components/SignUp';
import UserProfile from './Pages/UserProfile';
import SelfProfile from "./Pages/SelfProfile.js";
import FindContacts from "./Components/Popups/FindContacts";

function App() {
  return (
  <div className='App'>
 <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/auth/login" element={ <Login/> } />
        <Route path="/auth/signup" element={ <SignUp/> } />
        <Route path="/user/profile" element={<UserProfile/>} />
        <Route path="/self-profile" element={<SelfProfile/>} />

        {/* for test */}
        <Route path="/modals" element={<FindContacts/>} />

        {/* //<Route path="contact" element={ <Contact/> } /> */}
      </Routes>
  </div>
  );
}

export default App;