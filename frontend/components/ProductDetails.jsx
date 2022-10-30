import { Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { useShop } from "../context/shop";

const ProductDetails = ({ product }) => {
  const { quantity, setQuantity, addToCart } = useShop();

  function increaseQuantity() {
    setQuantity((prevQty) => prevQty + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  }

  return (
    <Flex flexDirection="column" gap="2" w="full">
      <Heading as="h3">{product.attributes.name}</Heading>
      <Text as="p">{product.attributes.description}</Text>
      <Box my="2">
        <Text fontWeight="bold" my="2">
          Quatity
        </Text>
        <Flex alignItems="center" gap="2.5">
          <IconButton
            onClick={decreaseQuantity}
            aria-label="decrease the quanity"
            icon={<AiFillMinusCircle />}
          />
          <Text fontSize="xl">{quantity}</Text>
          <IconButton
            onClick={increaseQuantity}
            aria-label="increase the quanity"
            icon={<AiFillPlusCircle />}
          />
        </Flex>
      </Box>
      <Button onClick={() => addToCart(product.attributes, quantity)}>Add to cart</Button>
    </Flex>
  );
};

export default ProductDetails;
