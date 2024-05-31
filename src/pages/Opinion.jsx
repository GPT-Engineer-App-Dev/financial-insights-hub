import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Opinion = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Opinion
      </Heading>
      <Text mb={4}>
        This is the Opinion section. Here you will find the latest opinion pieces from our columnists.
      </Text>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default Opinion;