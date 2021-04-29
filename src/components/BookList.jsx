import SingleBook from './SingleBook';

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