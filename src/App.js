import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Add from './pages/Add';
import Update from './pages/Update';
import Note from './pages/Note';


function App() {
  
  return (
    <div className='container'>
      <h1>My Notes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id/" element={<Update />} />
          <Route path="/note/:id/" element={<Note />} />
        </Routes>
      </BrowserRouter>  
    </div>
        
  );
}

export default App;
