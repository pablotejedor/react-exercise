import React from 'react';
import { Text, Image, Stack } from '@chakra-ui/react';
const Home = () => {
  return (
    <Stack maxW={'100vw'}>
      <Text>Bienvenido!</Text>
      <Image src="https://www.paragyte.com/img/React_Banner.png" alt="banner" />
    </Stack>
  );
};

export default Home;
