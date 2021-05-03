import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import WarningSign from './components/WarningSign';
import BadgeQTwo from './components/BadgeQTwo';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import fantasy from './data/fantasy.json';
// import CommentArea from './components/CommentArea';



function App() {
  return (
    <div>
      <MyNavBar />
      <WarningSign variant="danger" text="DANGER WILL ROBINSON!" />
      <BadgeQTwo text="SUP YALL ITS YA BOI ASMONGOLD" color="info" />
      <SingleBook book={fantasy[0]} />
      <BookList books={fantasy} />



    </div>
  );
}

export default App;
