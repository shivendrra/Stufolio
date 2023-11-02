import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Login from './components/Login';
import ProfileSetting from './components/ProfileSetting';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Settings from './components/Settings';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path='/login' Component={() => (<Login/>)} />
            <Route exact path='/' Component={() => (<Home/>)} />
            <Route exact path='/profile' Component={() => (<Profile/>)} />
            <Route exact path='/about' Component={() => (<About/>)} />
            <Route exact path='/profsett' Component={() => (<ProfileSetting/>)} />
            <Route exact path='/dashboard' Component={() => (<Dashboard/>)} />
            <Route exact path='/projects' Component={() => (<Projects/>)}/>
            <Route exact path='/settings' Component={() => (<Settings/>)}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
