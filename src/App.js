
import './App.css';


import UpcomingBatchesLanding from './components/home/upcomingBatches/UpcomingBatchesLanding';
import ExploreCourses from './components/home/exploreCourses/ExploreCourses';
import Navbars from './components/navbar/Navbars';
import Footers from './components/footer/Footers';

function App() {
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <Navbars/>
    <UpcomingBatchesLanding/>
    <ExploreCourses/>
    <Footers/>
    </div>
  );
}

export default App;
