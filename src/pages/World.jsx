import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={4}>
        World News
      </Heading>
      <Text mb={4}>
        This is the World News section. Here you will find the latest news from around the globe.
      </Text>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default World;