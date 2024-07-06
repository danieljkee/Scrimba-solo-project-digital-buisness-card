import './App.css';
import Photo from './components/Photo';
import Info from './components/Info';
import InfoButtons from './components/InfoButtons';
import About from './components/About';
import Interests from './components/Interests';
import CardFooter from './components/CardFooter';

export default function App() {
  return (
    <div className="card">
      <Photo />
      <Info />
      <InfoButtons />
      <About />
      <Interests />
      <CardFooter />
    </div>
  );
}
