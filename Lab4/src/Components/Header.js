import React, { useState, useContext } from 'react';
import { Navbar, Nav, Badge, Button, Container, Modal,Col,Row, Card } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { LoginContext } from '../LoginContext'; // Import LoginContext
import { BsCart3, BsPerson } from 'react-icons/bs'; // Add person icon
import LoginPopup from './LoginPopup'; // Import LoginPopup component
import { FaTrashAlt } from 'react-icons/fa';
import './Cart.css';
const Header = () => {
  const { cart, cartCount, cartTotal, clearCart, removeCart, updateCart } = useContext(CartContext);
  const { isLoggedIn, userInfo } = useContext(LoginContext); // Add LoginContext
  const [showCart, setShowCart] = useState(false); // To handle the cart modal
  const [showLoginPopup, setShowLoginPopup] = useState(false); // To handle the login popup

  // Handle closing the modals
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseLoginPopup = () => setShowLoginPopup(false);
  const handleShowLoginPopup = () => setShowLoginPopup(true);
  const handleIncreaseQuantity = (item) => {
    updateCart(item.id, item.quantity + 1); // Tăng số lượng sản phẩm
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCart(item.id, item.quantity - 1); // Giảm số lượng sản phẩm
    } else {
      removeCart(item.id); // Nếu số lượng == 1, xóa sản phẩm
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Pizza House</Navbar.Brand>
        <Nav className="ml-auto">
          {/* Display either login icon or user info based on login status */}
          {!isLoggedIn ? (
            <Nav.Item>
              <Button variant="light" onClick={handleShowLoginPopup}>
                <BsPerson size={24} />
              </Button>
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Button variant="light" disabled>
                <BsPerson size={24} /> {userInfo.data.name}
              </Button>
            </Nav.Item>
          )}

          {/* Cart Button */}
          <Nav.Item>
            <Button variant="light" onClick={handleShowCart}>
              <BsCart3 size={24} />
              <Badge bg="danger">{cartCount}</Badge>
            </Button>
          </Nav.Item>
        </Nav>
      </Container>

      {/* Cart Modal */}
      <Modal
  show={showCart} 
  onHide={handleCloseCart} 
  size="lg" 
  centered
  backdrop="static"  // Để ngăn modal tự đóng khi nhấn ngoài modal
  keyboard={false}  // Để ngăn modal đóng khi nhấn phím 'ESC'
>
  <Modal.Header closeButton className="cart-modal-header">
    <Modal.Title className="cart-modal-title">Your Cart: </Modal.Title>
  </Modal.Header>

  <Modal.Body className="cart-modal-body">
    {cart.length === 0 ? (
      <div className="cart-empty-message text-center">
        <p>Your cart is empty!</p>
      </div>
    ) : (
      <Container className="cart-items-container">
        {cart.map((item) => (
          <Row key={item.id} className="cart-item-row mb-3 align-items-center">
            {/* Product Image */}
            <Col xs={3} className="cart-item-image-col">
              <img src={item.image} alt={item.name} className="cart-item-img" />
            </Col>

            {/* Product Info */}
            <Col xs={6} className="cart-item-info-col">
              <div className="cart-item-title">{item.name}</div>
              <div className="cart-item-price">
                <strong>${item.price}</strong> x {item.quantity}
              </div>
              {/* Quantity control */}
              <div className="cart-item-quantity-control">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleDecreaseQuantity(item)}
                  className="cart-item-quantity-btn"
                >
                  -
                </Button>
                <span className="cart-item-quantity-display">{item.quantity}</span>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleIncreaseQuantity(item)}
                  className="cart-item-quantity-btn"
                >
                  +
                </Button>
              </div>
            </Col>

            {/* Remove button */}
            <Col xs={3} className="cart-item-remove-col text-right">
              <Button
                variant="danger"
                onClick={() => removeCart(item.id)}
                className="cart-item-remove-btn"
              >
                <FaTrashAlt /> Remove
              </Button>
            </Col>
          </Row>
        ))}

        {/* Total Price and Clear Cart Button */}
        <Row className="cart-total-row mt-3">
          <Col className="cart-total-col">
            <h5 className="cart-total-text">
              Total: <strong>${cartTotal.toFixed(2)}</strong>
            </h5>
          </Col>
          <Col className="text-right cart-clear-btn-col">
            <Button variant="outline-danger" onClick={clearCart} className="cart-clear-btn">
              Clear Cart
            </Button>
          </Col>
        </Row>
      </Container>
    )}
  </Modal.Body>
  
  {/* Close button */}
  <Modal.Footer className="cart-modal-footer">
    <Button variant="secondary" onClick={handleCloseCart} className="cart-modal-close-btn">
      Close
    </Button>
  </Modal.Footer>
</Modal>





      {/* Login Popup */}
      <LoginPopup show={showLoginPopup} onClose={handleCloseLoginPopup} />
    </Navbar>
  );
};

export default Header;
