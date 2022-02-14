import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Play-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/categories">Categories</Nav.Link> */}
            <Nav.Link href="/explore">Explore</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/accounts/accountDetails">Your Account</NavDropdown.Item>
              <NavDropdown.Item href="/accounts/orders">Orders</NavDropdown.Item>
              <NavDropdown.Item href="/accounts/wishlist">Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            {/* <Nav.Link eventKey={2} href="?cart">
              Cart
            </Nav.Link> */}
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar