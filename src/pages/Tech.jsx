import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Tech = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Tech News
      </Heading>
      <Text mb={4}>
        This is the Tech News section. Here you will find the latest news about technology and innovation.
      </Text>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default Tech;