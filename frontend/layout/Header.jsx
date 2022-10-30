import Link from "next/link";
import { Button, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { useShop } from "../context/shop";

const Header = () => {
  const { setShowCart } = useShop();

  return (
    <Flex
      w="full"
      h="36"
      justifyContent="space-between"
      alignItems="center"
      px="3"
    >
      <Text as={Link} href="/" fontSize="2xl" fontWeight="normal">
        E-commerce .
      </Text>
      <Stack direction="row" alignItems="center" gap="2.5">
        <Link href="/login">Login</Link>
        <Link href="/">
          <IoNotifications fontSize="1.2rem" />
        </Link>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => setShowCart((prev) => !prev)}
        >
          <FiShoppingBag fontSize="1.2rem" />
        </a>
      </Stack>
    </Flex>
  );
};

export default Header;
