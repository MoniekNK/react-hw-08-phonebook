import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Box bg="teal.500" p="4" color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold"></Text>
        <Flex>
          <ChakraLink
            as={Link}
            to="/"
            style={{ marginRight: '10px' }}
            color="white"
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/login"
            style={{ marginRight: '10px' }}
            color="white"
          >
            Login
          </ChakraLink>
          <ChakraLink as={Link} to="/register" color="white">
            Register
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
