import { Foot } from './components/Foot';
import { Navbar } from './components/Navbar';
import './App.css';

import { Home } from './components/Home';
import { History } from './components/History';
import { Skill } from './components/Skill';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <History />
      <Skill />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
