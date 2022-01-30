import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Container maxW={'container.xl'}>
        <Stack
          justify={'center'}
          align={'center'}
          minH={'100vh'}
          bg={'teal'}
          fontFamily={'monospace'}
          fontSize={'md'}
          p={12}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Stack>
      </Container>
    </>
  );
}

export default App;
