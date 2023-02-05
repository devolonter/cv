import { Box, ChakraProvider, theme, } from '@chakra-ui/react'
import * as React from 'react'
import { ColorModeSwitcher } from './components/ColorModeSwitcher'
import { Main } from './views/Main'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box id={'switch-mode'} pos={'absolute'} right={1} top={1}>
      <ColorModeSwitcher/>
    </Box>
    <Main />
  </ChakraProvider>
)
