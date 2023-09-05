import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <About />
                <Skills />
            </main>
        </>
    );
}

export default App;
