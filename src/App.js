
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Forgotpassword from './Components/Forgotpassword';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Signin/> } />
      <Route path="sign-up" element={ <Signup/> } />
      <Route path="Forgot-Password" element={ <Forgotpassword/> } />
      <Route path="Dashboard" element={ <Dashboard/> } />
    </Routes>
  </div>
  )
}
export default App;
