import React, { useState } from "react";
import {
  Container,
  Grid,
  Heading,
  Button,
  Input,
  Box,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";

const Crypt = () => {
  const [datacrypto, setDataCrypto] = useState([
    { id: 1, name: "Bitcoin", price: 40000, quantity: 0 },
    { id: 2, name: "Ethereum", price: 2800, quantity: 0 },
    { id: 3, name: "Litecoin", price: 150, quantity: 0 },
  ]);
  const [cart, setCart] = useState([]);

  const handleCart = ele => {
    if (ele.quantity > 0) {
      const Crypto = cart.find(elements => elements.id === ele.id);
      if (Crypto) {
        Crypto.quantity += ele.quantity;
      } else {
        setCart([...cart, { ...ele }]);
      }
      ele.quantity = 0;
    } else {
      alert("Please enter a quantity");
    }
  };

  const handleRemove = cryptoId => {
    const updatedCart = cart.filter(crypto => crypto.id !== cryptoId);
    setCart(updatedCart);
  };

  const handleTotalCost = () => {
    return cart.reduce(
      (total, crypto) => total + crypto.quantity * crypto.price,
      0
    );
  };

  return (
    <Container maxW="container.lg" marginTop="20px">
      <Heading as="h6">CryptoCurrency Store</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {datacrypto.map(ele => (
          <Box
            key={ele.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            textAlign="center"
          >
            <Heading as="h1" size="lg" mb={2}>
              {ele.name}
            </Heading>
            <Text fontSize="lg" fontWeight="bold">
              Price: ${ele.price}
            </Text>
            <Button
              colorScheme="teal"
              mt={2}
              onClick={() => handleCart(ele)}
              size="sm"
            >
              Buy
            </Button>
            <Input
              value={ele.quantity}
              type="number"
              mt={2}
              onChange={e => {
                const newQuantity = parseInt(e.target.value, 10);
                ele.quantity = newQuantity;
                setDataCrypto([...datacrypto]);
              }}
              size="sm"
            />
          </Box>
        ))}
      </Grid>
      <Box mt={8} borderWidth="1px" borderRadius="md" p={4}>
        <Heading as="h2" size="md">
          Your Cart
        </Heading>
        {cart.length === 0 ? (
          <Text mt={2} fontSize="lg" color="red.500">
            Your cart is empty!
          </Text>
        ) : (
          <List mt={2} gap={5}>
            {cart.map(ele => (
              <ListItem key={ele.id} mt="4">
                {ele.name} - Quantity: {ele.quantity} - Total: ${ele.quantity * ele.price}
                <Button
                  colorScheme="red"
                  ml={4}
                  size="sm"
                  onClick={() => handleRemove(ele.id)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
        )}
        {cart.length > 0 && (
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Total Cost: ${handleTotalCost()}
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default Crypt;


// this is mine  question///
