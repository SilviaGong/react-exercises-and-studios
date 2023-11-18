import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import Greeting from './components/Greeting.js';

function App() {
  return (
    <div className="App">
      <Greeting />
      <MovieList />
      <ChoresList />
      <BookList />
    </div>
  );
}



export default App;
