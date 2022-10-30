import React from "react";
import Link from 'next/link'
import { Flex, Text, Image, Box } from "@chakra-ui/react";

const Product = ({ product }) => {
  return (
    <Box
      maxW="fit-content"
      bg="#fff"
      color="black"
      rounded="2xl"
      overflow="hidden"
      m="2.5"
    >
      <Link href={`product/${product.slug}`}>
        <Image
          display="block"
          w="20rem"
          h="20rem"
          objectFit="cover"
          cursor="pointer"
          src={product.image.data.attributes.formats.small.url}
          alt={product.description}
        />
      </Link>
      <Flex justifyContent="space-between" alignItems="center" p="4">
        <Text fontWeight="bold">{product.name}</Text>
        <Text>${product.price}</Text>
      </Flex>
    </Box>
  );
};

export default Product;
