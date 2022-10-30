import { Box } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" px="40">
      <Header />
      <Sidebar />
      {children}
    </Box>
  );
};

export default Layout;
