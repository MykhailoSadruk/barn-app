import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import StartPage from './screens/StartPage';
import LoginPage from './screens/LoginPage';
function App() {
    return (
        <div className="App">
           <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/customer-area" element={<CustomerArea />} /> */}
        
      </Routes>
    </Router>
        </div>
    );
}

export default App;
