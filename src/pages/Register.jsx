import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser, refreshUser } from './../redux/operations';
import { getIsLogged } from './../redux/selectors';
import Navigation from '../components/Navigation/Navigation';
import {
  useToast,
  Box,
  Input,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

export const Register = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged === true) {
      navigate('/');
    }
  }, [isLogged, dispatch, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
      toast({
        title: 'Registration Successful',
        description: 'You have successfully registered.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description: 'An error occurred during registration. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
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
          <Heading mb="4">Register</Heading>
          <form onSubmit={handleSubmit}>
            <Box mb="4">
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                bg="gray.100"
                borderColor="teal.300"
                boxShadow="base"
              />
            </Box>
            <Box mb="4">
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                bg="gray.100"
                borderColor="teal.300"
                boxShadow="base"
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
                bg="gray.100"
                borderColor="teal.300"
                boxShadow="base"
              />
            </Box>
            <Box>
              <Button type="submit" colorScheme="teal" size="md">
                Register
              </Button>
            </Box>
          </form>
          <Text mt="4">
            Already have an account?{' '}
            <Link as={NavLink} to="/login">
              Login
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};
