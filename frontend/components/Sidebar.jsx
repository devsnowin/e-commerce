import { useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useShop } from "../context/shop";

const Sidebar = () => {
  const { showCart, setShowCart } = useShop();
  const { onClose } = useDisclosure()

  return (
    <>
      <Drawer placement="right" isOpen={showCart} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setShowCart((prev) => !prev)} />
          <DrawerHeader borderBottomWidth="1px">Shop cart</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
