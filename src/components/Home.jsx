import React from 'react';
import { Text, Image, Stack } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from '../store/slices/registerSlice';
import { useSelector } from 'react-redux';
const Home = () => {
  const isLogged = useSelector(selectIsLogged);

  if (!isLogged) {
    return <Navigate to={'/register'} />;
  }

  return (
    <Stack maxW={'100vw'}>
      <Text>Bienvenido!</Text>
      <Image src="https://www.paragyte.com/img/React_Banner.png" alt="banner" />
    </Stack>
  );
};

export default Home;
