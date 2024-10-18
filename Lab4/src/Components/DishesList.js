import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Card, Container,Row, Col, Button } from "react-bootstrap";

 // Access addToCart from context

  // const dishes = [
  //   {
  //     id: 0,
  //     name: "Uthappizza",
  //     image: "images/menu1.jpg",
  //     category: "mains",
  //     label: "Hot",
  //     price: "4.99",
  //     featured: true,
  //     description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  //   },
  //   {
  //     id: 1,
  //     name: "Zucchipakoda",
  //     image: "images/menu2.jpg",
  //     category: "appetizer",
  //     label: "",
  //     price: "1.99",
  //     featured: false,
  //     description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce."
  //   },
  //   {
  //     id: 2,
  //     name: "Vadonut",
  //     image: "images/menu3.jpg",
  //     category: "appetizer",
  //     label: "New",
  //     price: "1.99",
  //     featured: false,
  //     description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  //   },
  //   {
  //     id: 3,
  //     name: "ElaiCheese Cake",
  //     image: "images/menu4.jpg",
  //     category: "dessert",
  //     label: "",
  //     price: "2.99",
  //     featured: false,
  //     description: "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms."
  //   }
  // ];

  const DishesList = () => {
    const { addToCart } = useContext(CartContext);
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItem = async () => {
        try {
          const res = await fetch('https://api-demo-4gqb.onrender.com/products')
    
          const data = await res.json()
    
          setItems(data.data)
        
      } catch (error) {
        console.log(error.messages);
      }
    }

      fetchItem();
    }, [])

    return (
    <>
      <h2 className="mt-5">Dishes List</h2>
      <Container>
        <Row>
        {items.map((dish) => (
             <Col>        
             <Card key={dish.id}>
             <Card.Img variant="top" src={dish.image} />
             <Card.Body>
               <Card.Title>{dish.title}</Card.Title>
               <Card.Text>
               ${dish.price}
               </Card.Text>
              <Button variant="danger"onClick={() => addToCart(dish)}>Add to cart</Button>
             </Card.Body>
             </Card>
             </Col>
        ))}
       </Row>
       </Container>
    </>
  );
};

export default DishesList;
