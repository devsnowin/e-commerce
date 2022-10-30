import { useRouter } from "next/router";
import { useQuery } from "urql";
import {
  Flex,
  Image,
} from "@chakra-ui/react";
import { HiArrowNarrowLeft } from "react-icons/hi";

import Layout from "../../layout/Layout";
import Loader from '../../components/Loader'
import { GET_PRODUCTS_QUERY } from "../../lib/query";
import ProductDetails from "../../components/ProductDetails";

const Product = () => {
  const router = useRouter();

  // Fetching graphql data
  const [results] = useQuery({
    query: GET_PRODUCTS_QUERY,
    variables: { slug: router.query.slug },
  });
  const { data, fetching, error } = results;

  if (fetching) return <Loader />;
  if (error) return <p>Something went wrong...... {error.message}</p>;

  const product = data.products.data[0];
  if (!product) return <p>No item founds!</p>;

  return (
    <Layout>
      <Flex
        as="button"
        alignItems="center"
        gap="1"
        mb="8"
        px="3"
        onClick={() => router.back()}
        >
        <HiArrowNarrowLeft size={20} /> Back
      </Flex>
      <Flex w="full" gap="4rem" maxW="60rem" px="3">
        <Image
          src={product.attributes.image.data.attributes.formats.small.url}
          alt={product.attributes.description}
        />
        <ProductDetails product={product} />
      </Flex>
    </Layout>
  );
};

export default Product;
