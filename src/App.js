import './App.css';
import react, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './screens/StartPage/StartPage';
import LoginPage from './screens/LoginPage/LoginPage';
import CustomerPage from './screens/CustomerPage/CustomerPage'
import AdminPage from './screens//AdminPage/AdminPage'

function App() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
    return (
        <div className="App">
           <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage  />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
        </div>
    );
}

export default App;
