import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json';
import MyNavBar from './components/MyNavBar';
import BadgeQTwo from './components/BadgeQTwo';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import FilterBooks from './components/FilterBooks';
import WarningSign from './components/WarningSign'



function App() {
  return (
    <div>
      <MyNavBar />
      <WarningSign variant="danger" text="DANGER WILL ROBINSON!" />
      <BadgeQTwo text="SUP YALL ITS YA BOI ASMONGOLD" color="info" />
      <SingleBook book={fantasy[0]} />
      <BookList books={fantasy} />
      <FilterBooks />


    </div>
  );
}

export default App;
