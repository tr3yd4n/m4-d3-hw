import React from 'react'
import { Card } from 'react-bootstrap'


class SingleBook extends React.Component {
    state = {
        selected: false
    }
    render() {
        return (
            <Card
                style={{ width: '18rem' }}
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>

            //<CommentArea show={boolean(this.state.showComments)} deselectBook={() => this.setState({ selected : '' })}></CommentArea>
        )
    }
}
export default SingleBook