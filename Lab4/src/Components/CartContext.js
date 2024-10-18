import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find(item => item.id === dish.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...dish, quantity: 1 }];
      }
    });
  };
  const updateCart = (id, quantity) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity = quantity;
    } else {
      // Nếu sản phẩm chưa có trong giỏ, bạn có thể thêm sản phẩm mới vào giỏ.
      const newItem = { id, name: 'Sample Item', price: 10, image: 'image-url', quantity };
      updatedCart.push(newItem);
    }
    setCart(updatedCart); // Cập nhật lại giỏ hàng.
  };
  

  const removeCart = (dishId) => {
    setCart((prevItems) => {
      // Xóa sản phẩm khỏi giỏ hàng nếu có id tương ứng
      return prevItems.filter(item => item.id !== dishId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart, clearCart, cartCount, cartTotal,updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
