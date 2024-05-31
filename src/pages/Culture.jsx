import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Culture = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Culture
      </Heading>
      <Text mb={4}>
        This is the Culture section. Here you will find the latest news about arts, entertainment, and culture.
      </Text>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default Culture;