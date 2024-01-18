import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser, refreshUser } from '../redux/operations';
import { getIsLogged } from '../redux/selectors';
import Navigation from '../components/Navigation/Navigation';
import {
  ChakraProvider,
  Input,
  Button,
  Box,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

export const Login = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, dispatch, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <ChakraProvider>
      <header>
        <Navigation />
      </header>

      <Box className="container center">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="8"
          maxW="md"
          mx="auto"
          mt="8"
          bg="white"
          boxShadow="md"
        >
          <Heading mb="4">Login</Heading>
          <form onSubmit={handleSubmit}>
            <Box mb="4">
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Box>

            <Box mb="4">
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Box>

            <Box>
              <Button type="submit" colorScheme="teal" size="md" w="full">
                Login
              </Button>
            </Box>
          </form>

          <Text mt="8">
            No account yet?{' '}
            <Link as={NavLink} to="/register">
              Register
            </Link>
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
