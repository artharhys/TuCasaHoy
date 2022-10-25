import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarousel from './components/BootstrapCarousel';
import BootstrapNavBar from './components/BootstrapNavBar';

function App() {
  return (
    <div className="App">
      <BootstrapNavBar/>    
      <BootstrapCarousel/>
    </div>
  );
}

export default App;
