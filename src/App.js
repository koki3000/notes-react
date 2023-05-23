import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesListPage from './pages/NotesListPage';
import SingleNotePage from './pages/SingleNotePage';


function App() {
  
  return (
    <div className='container'>
      <h1>My Notes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesListPage />}/>
          <Route path="/note/:id/" element={<SingleNotePage />} />
        </Routes>
      </BrowserRouter>  
    </div>
        
  );
}

export default App;
