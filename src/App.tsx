import { sponsorsData, teamMembers } from './assets/data';
import { galleryImages } from './assets/data';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Players from './components/Players';
import Sponsors from './components/Sponsors';
import Stats from './components/Stats';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Stats />
            <Players players={teamMembers} />
            <Gallery images={galleryImages} />
            <Sponsors sponsors={sponsorsData} />
            <Footer/>
        </>
    );
}

export default App;
