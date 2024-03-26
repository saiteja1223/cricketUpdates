import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Category from './components/Category';

import Groups from './components/Groups';
import Content from './components/Content';
import{BrowserRouter,Routes,Route }from 'react-router-dom'
import Home from './components/Home';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/ranking/:category/:group' Component={Body}>
       
      </Route>
     </Routes>
     {/* <Category></Category>
     <Groups></Groups>
      <Content></Content> */}
    </div>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
