import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AHeader from './Components/Pages/AHeader';
import Banner from './Components/Pages/Banner';
import CFashion from './Components/Pages/CFashion';
import DStaff from './Components/Pages/DStaff';
import ESale from './Components/Pages/ESale';
import FNews from './Components/Pages/FNews';
import GContact from './Components/Pages/GContact';

function App() {
  return (
    <div>
      <AHeader />
      <Banner />
      <CFashion />
      <DStaff/>
      <ESale/>
      <FNews/>
      <GContact/>
    </div>
  );
}

export default App;
