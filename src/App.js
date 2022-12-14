
import './App.css';
import HelloWorld from './pages/hello_world';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminDashboard from './pages/admin_dashboard'
import LoanCardManagement from './pages/loan_card_management'
import CustomerDataManagement from './pages/customer_data_management';
import Login from './pages/login';
import ItemsMasterData from './pages/items_master_data';
import DisplayLoanCard from './pages/DisplayLoanCard';
import EditLoanCard from './pages/EditLoanCard';
function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path ="helloworld" element = {<HelloWorld/>} />
        <Route path ="dashboard" element = {<AdminDashboard/>} />
        <Route path = "loanCardManagement" element = {<DisplayLoanCard/>}/>
        <Route path = "customerDataManagement" element = {<CustomerDataManagement/>}/>
        <Route path = "itemsMasterData" element = {<ItemsMasterData/>}/>
        <Route path = "login" element = {<Login/>}/>
        <Route path = "" element = {<Login/>}/>
         <Route path = "addLoanCard" element = {<LoanCardManagement/>}/>
         <Route path = "editLoanCard" element = {<EditLoanCard/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
