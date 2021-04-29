import { SingleBook } from './SingleBook';
import { col, Container, row } from 'react-bootstrap';
import fantasy from './data/fantasy.json';

const BookList = ({ books }) => (
    <container>
        <row>
            {
                books.map(b => (
                    <col xs={3}>
                        <SingleBook book={b} />
                    </col>
                ))
            }
        </row>
    </container>
)

export default BookList