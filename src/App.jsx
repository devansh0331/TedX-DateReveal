import './App.css';

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import EnterCode from './EnterCode';
import Dark from './Dark';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EnterCode/>}/>
        <Route path="/dark" element={<Dark/>}/>
      </Routes>
    </Router>
  );
}

export default App;
