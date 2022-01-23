import Movies from "./Components/Movies";
import MyMovie from "./Components/MyMovie";
import SearchBar from "./Components/SearchBar";
import MovieState from './context/MovieState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
    <>
      <MovieState>
        <Router>
          <Routes>
            <Route exact path="/" element={<><SearchBar /><Movies /></>}> </Route>
            <Route exact path="/movie/:userId" element={<MyMovie />}> </Route>
          </Routes>
        </Router>
      </MovieState>
    </>
  );
}

export default App;
