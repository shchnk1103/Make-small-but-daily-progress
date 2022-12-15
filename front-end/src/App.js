import './scss/index.css';
import {FetchData} from "./component/FetchData";
import {Home} from "./component/Home";
import {ArticleCards} from "./component/ArticleCards";

function App() {
  return (
    <div>
      <Home/>
      <ArticleCards/>
      <FetchData/>
    </div>
  );
}

export default App;
