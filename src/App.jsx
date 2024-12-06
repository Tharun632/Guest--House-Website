import './index.css';
import Navbar from "./Components/Navbar";
import BookForm from "./Components/BookForm";
import About from "./Components/About";
import Rooms from './Components/Rooms';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Maps from './Components/Maps';
import Footer from './Components/footer';


function App() {
  return (
    <>
    <Navbar />
    <BookForm />
    <About />
    <Rooms />
    <Services/>
    <Banner />
    <Gallery />
    <Contact />
    <Maps />
    <Footer />
    </>
  )
}

export default App;
