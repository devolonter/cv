import {
  Badge,
  Box,
  ChakraProvider, Container, Divider, Flex, Grid, GridItem, HStack, Text,
  theme, VStack,
} from '@chakra-ui/react'
import { AiFillLinkedin, AiOutlineGithub, MdEmail } from 'react-icons/all'
import Skills from './components/Skills'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      maxW="960px"
      mx="auto"
      color={'gray.700'}
    >
      <Box
        as={'header'}
      >
        <Grid
          templateColumns="1fr auto"
          gap={4}
        >
          <GridItem>
            <Flex
              alignItems={'start'}
              direction={'column'}
              h={'100%'}
            >
              <Text
                fontSize={'1.5rem'}
                textTransform={'uppercase'}
                fontWeight={'bold'}
              >
                Artur Bikmullin
              </Text>
              <Text
                color={'gray.600'}
                mt={0}
              >
                Flutter developer, Full-Stack Web Developer and Game Development Practitioner
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <VStack
              alignItems={'start'}
              fontSize={'1.2rem'}
            >
              <HStack>
                <MdEmail />
                <Text>devolonter@gmail.com</Text>
              </HStack>
              <HStack>
                <AiOutlineGithub />
                <Text>github.com/devolonter</Text>
              </HStack>
              <HStack>
                <AiFillLinkedin />
                <Text>linkedin.com/in/devolonter</Text>
              </HStack>
            </VStack>
            </GridItem>
        </Grid>
        <Box
          py={2}
          px={4}
          bg={'gray.100'}
          rounded={'xl'}
          mt={4}
        >
          I am an experienced web developer with over 15 years of experience in the field. My expertise lies in
          front-end and back-end development, utilizing technologies such as HTML/CSS/JS, React, Vue, Node.js,
          and WebGL to create engaging and interactive web experiences. I also have experience with game engines
          such as Godot, and have a strong understanding of animation, shaders, and WebGL. I am constantly seeking
          to improve my skills and stay current with the latest industry trends. I am excited about the opportunity
          to bring my expertise to the role of a playable ads web developer.
        </Box>
        <Grid
          templateColumns="1fr auto"
          gap={4}
          mt={4}
        >
          <GridItem>
          </GridItem>
          <GridItem>
            <Skills
              skills={['js', 'html', 'ts', 'node', 'godot', 'webgl', 'shaders', 'pixi', 'phaser']}
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  </ChakraProvider>
)
