import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Financial Times
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Home
          </Link>
          <Link as={NavLink} to="/world" px={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            World
          </Link>
          <Link as={NavLink} to="/business" px={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Business
          </Link>
          <Link as={NavLink} to="/opinion" px={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Opinion
          </Link>
          <Link as={NavLink} to="/tech" px={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Tech
          </Link>
          <Link as={NavLink} to="/culture" px={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Culture
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;