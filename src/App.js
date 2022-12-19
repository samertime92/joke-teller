import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './pages/home/Home';
import styles from './Navbar.module.css'
import {ReactComponent as PacLogo} from './assets/PacLogo.svg';
import About from './pages/about/About';
import Favourites from './pages/favourites/Favourites';

function App() {
  const animate=()=>{
  const logo=document.querySelector('#logo')

    logo.style.transform='translateX(1000px)'
    setTimeout(()=>{
      logo.style.transition='0s'
      logo.style.transform='translateX(-10000px)'
    },300)
    setTimeout(()=>{
      logo.style.transition='1s'
      logo.style.transform='translateX(0px)'
    },410)
    
  }

function highlight(prop){
  const btn=document.querySelector(`#${prop}`)

  btn.style.background='white'
  btn.style.color='black'
} 
function normalize(prop){
  const btn=document.querySelector(`#${prop}`)

  btn.style.background='none'
  btn.style.color='white'
} 


const [show,setShow]=useState(1)
const switcher=(target)=>{
  animate()

  if(target===1){
  setShow(2)
  }
  if(target===2){
    setShow(1)
    }
    if(target===3){
      setShow(1)
      }
}
useEffect(()=>{},[])

  return (
    <div className="App">
      <BrowserRouter>
     <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}> joke pac
            </li>
          {show===1&&<li >
                <Link id='home' to="/" onClick={()=>switcher(1)} onTouchStart={()=>highlight('home')} onTouchEnd={()=>normalize('home')} 
                 > jokes </Link>
            </li>}
          {show===2&&<li >
                <Link id='favourites' to="favourites" onClick={()=>switcher(2)}  onTouchStart={()=>highlight('favourites')} onTouchEnd={()=>normalize('favourites')} 
                > faves </Link>
            </li>}
             <li  >
                <Link   id='about' to="/about" onClick={()=>switcher(3)} onTouchStart={()=>highlight('about')} onTouchEnd={()=>normalize('about')} 
                > about </Link>
            </li>
            <li id='logo' className={styles.logo} >
              <PacLogo />
            </li>
            
        </ul>
    </nav>
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="favourites" element={<Favourites />} />


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
