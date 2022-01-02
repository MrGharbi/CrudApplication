import './App.css';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
        <ListEmployeeComponent/>
      </div>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
