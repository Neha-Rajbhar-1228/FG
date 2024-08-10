
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import UpcomingBatchesLanding from './components/home/upcomingBatches/UpcomingBatchesLanding';
import ExploreCourses from './components/home/exploreCourses/ExploreCourses';

function App() {
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <Navbar/>
    <UpcomingBatchesLanding/>
    <ExploreCourses/>
    <Footer/>
    </div>
  );
}

export default App;
