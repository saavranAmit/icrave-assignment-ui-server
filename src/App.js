import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Feedback from "./Components/Feedback"
import Food from "./Components/Food"
import FoodMenu from "./Components/FoodMenu"
import Footer from "./Components/Footer"
import Showcase from "./Components/Showcase"
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Food />
      <FoodMenu />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
