import { Navbar, Nav } from 'react-bootstrap'

const MyNavBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Book-strap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#link">Books</Nav.Link>
                <Nav.Link href="#link">More Books...</Nav.Link>
                <Nav.Link href="#link">Even More Books?!</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default MyNavBar