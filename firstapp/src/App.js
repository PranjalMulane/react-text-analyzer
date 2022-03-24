import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Mode from './Components/Mode';

function App() {
  return (
    <>
    <Navbar titleText="React Text Analyzer" aboutText="About us" contactText="Contact" />
    <TextForm/>
    {/* <Mode/> */}
    </>
  );
}

export default App;
