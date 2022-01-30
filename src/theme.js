import { extendTheme } from '@chakra-ui/react';
export default extendTheme({
  styles: {
    global: {
      '.input': {
        borderRadius: '6px',
        height: '5vh',
      },
    },
  },

  components: {
    Text: {
      baseStyle: {
        fontSize: ['md', 'xl'],
        letterSpacing: 'tighter',
      },
      variants: {
        error: {
          color: 'red',
          fontSize: 'md',
          backgroundColor: 'red.100',
          padding: '5px',
          borderRadius: '6px',
        },
      },
    },
  },
});
