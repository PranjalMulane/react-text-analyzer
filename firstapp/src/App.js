import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar titleText="React Text Analyzer" aboutText="About us" contactText="Contact" />
    <TextForm/>
    </>
  );
}

export default App;
