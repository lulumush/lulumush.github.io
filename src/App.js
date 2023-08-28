import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <About />
            </main>
        </>
    );
}

export default App;
