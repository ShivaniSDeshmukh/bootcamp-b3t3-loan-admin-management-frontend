import { Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import AdminDashboard from './pages/admin_dashboard';
function App() {
  return ( 
    <div>
      {/* <Route path='/dashboard' component = {AdminDashboard}/>  */}
      <Login/>
      
    </div>
                  
    
  );
}

export default App;
