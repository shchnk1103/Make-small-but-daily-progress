import './scss/index.css';
import {Navbar} from "./component/Navbar";
import {FetchData} from "./component/FetchData";

function App() {
    return (
        <div>
            <Navbar/>
            <FetchData/>
        </div>
    );
}

export default App;
