import "./App.css";
import Cards from "./components/car-cards/Cards"
import MainBanner from "./components/main-banner/MainBanner";
import AboutSection from "./components/about-section/AboutSection";
import Map from "./components/map/Map"
import Navbar from "./components/navbar/Navbar";
import ContactFrom from "./components/contact-form/ContactFrom";


function App() {
    return (
        <div className="App">
            <Navbar/>

            <MainBanner/>

            <AboutSection/>

            <Cards/>

            <ContactFrom/>

            <Map/>
        </div>

    );
}


export default App;
