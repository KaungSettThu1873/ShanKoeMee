

import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className=" container-fluid row  text-center justify-content-center  ">
        <div className="col-lg-5 ms-lg-4 ms-md-4 ms-sm-4 ms-4   " >
              <Header/>
              <Content/>
              <Footer/>
        </div> 
    </div>
  )
}

export default App;
