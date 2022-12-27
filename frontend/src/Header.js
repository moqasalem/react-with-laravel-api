import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useNavigate()
    //console.warn(user)
    function Logout (){
        localStorage.clear()
        history("/register")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Link to="/">Product List</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        {localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add Products</Link>
                                <Link to="/update">Update Products</Link>
                                <Link to="/search">Search Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        }
                    </Nav>

                    {localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown >
                    </Nav>
                    :null
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header