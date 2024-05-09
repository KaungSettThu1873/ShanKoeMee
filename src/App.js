

import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className=" container-lg-fluid row  text-center justify-content-center bg-Color ">
       <div className=" col-lg-5  p-lg-3 " >
       <Header/>
        <Content/>
        <Footer/>
       </div>
    </div>
  )
}

export default App;
