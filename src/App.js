//import logo from './logo.svg';
import './App.css';
import AllPlayer from './Components/AllPlayer/AllPlayer';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <div className="App">
        <Helmet>
          <title>UEFA - Football Team</title>
        </Helmet>
        <AllPlayer></AllPlayer>
    </div>
    
  );
}

export default App;
