import { Grid, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Grid placeItems="center" w="full" minH="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Grid>
  );
};

export default Loader;
