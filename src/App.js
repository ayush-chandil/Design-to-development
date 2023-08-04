import './App.css';
import { Brand, Navbar,CTA} from "./components/index";
import {Header,WhatGPT3,Features,Possibility,Blog,Footer} from "./containers/index";



function App() {
  return (
    
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header/>
          
        </div>
        <Brand />
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
        
      </div>
    
  );
}

export default App;
