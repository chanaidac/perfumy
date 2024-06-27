import Navbar from './components/Navbar';
import Search from './components/Search';
import PerfumyList from './components/PerfumyList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <PerfumyList></PerfumyList>
            <About></About>
            <Footer></Footer>
        </div>
    );
}
export default App;