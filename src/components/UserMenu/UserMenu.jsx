import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from '../../redux/selectors';
import { logoutUser } from '../../redux/operations';
import { Button, Text, Box } from '@chakra-ui/react';

export const UserMenu = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center">
      <Text as="b" mr="4">
        Welcome, {email}
      </Text>
      <Button variant="solid" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </Box>
  );
};
