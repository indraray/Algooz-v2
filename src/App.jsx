
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Algorithms from './views/Algorithms';
import TranslatingDiv from './components/TranslateDiv/Translate';


const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/algorithms" element={<Algorithms />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
     <TranslatingDiv />
      
    </div>
  );
}

export default App;
