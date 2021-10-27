import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login'
import {BrowserRouter ,Switch,Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </BrowserRouter>
  );
}

export default App;
