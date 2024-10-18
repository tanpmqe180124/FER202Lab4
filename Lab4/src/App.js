import React from 'react';
import { ThemeProvider } from './Components/ThemeContext';
import { CartProvider } from './Components/CartContext';
import { LoginProvider } from './LoginContext'; // Import LoginProvider
import Header from './Components/Header';
import ProductCarousel from './Components/ProductCarousel';
import DishesList from './Components/DishesList';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LoginProvider> {/* Wrap with LoginProvider */}
        <CartProvider>
          <Container>
            <Header />
            <ProductCarousel />
            <DishesList />
          </Container>
        </CartProvider>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
