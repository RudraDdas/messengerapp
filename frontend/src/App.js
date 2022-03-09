import './App.css';
import { Route } from "react-router-dom"
import Homepage from './components/Homepage';
import Chatpage from './components/Chatpage';


function App() {
  return (
    <div className="App">
  <Route path="/" component={Homepage} exact/>
  <Route path="/chat" component={Chatpage} />
    </div>
  );
}

export default App;
