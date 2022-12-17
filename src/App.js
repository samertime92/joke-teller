import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './pages/home/Home';
import styles from './Navbar.module.css'
import {ReactComponent as PacLogo} from './assets/PacLogo.svg';
import About from './pages/about/About';

function App() {
const animate =()=>{
  // alert('hi')
  // document.getElementsByClassName('logo').style.display='none'
}
animate()
  return (
    <div className="App">
      <BrowserRouter>
     <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}> joke pac
            </li>
            <li >
                <Link to="/" > jokes </Link>
            </li>
            <li >
                <Link to="/about" > about </Link>
            </li>
            <li  className={styles.logo} >
              <PacLogo />
            </li>
            
        </ul>
    </nav>
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="about" element={<About />} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
