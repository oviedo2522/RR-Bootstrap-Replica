import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './TopBar';
import Background from './Background';
import Banner from './Banner';
import StoreListings from './StoreListings';



function App() {
  return (
    <div className="App">
      <Navbar />      
      <div className='background-div'>
        <Banner />
        <Background />        
      </div>
      <div className='listings'>
        <h4>Browse stores in Ls Vegas</h4>
        <StoreListings />
      </div>
    </div>
    
  );
}



export default App;
