import './App.css';
import Userlist from './Userlist.jsx'
import { BrowserRouter as Router, Route,Routes, Form} from 'react-router-dom';
import NavBar from './Navbar.jsx';
import Formpage from './Formpage.jsx';
import NewForm from './Newform.jsx';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
      <Route path='/add' element={<Formpage/>} />
      <Route path='/users/:id' element={ <Formpage/>} />
      <Route path='/hi' element={ <Userlist/>} />
      </Routes>
      </Router>
      <NewForm/>
      <Formpage/>
    </div>
  );
}
 
export default App;