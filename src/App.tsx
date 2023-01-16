import {
  Badge,
  Box,
  ChakraProvider, Container, Divider, Flex, Grid, GridItem, HStack, Spacer, Text,
  theme, VStack,
} from '@chakra-ui/react'
import { AiFillLinkedin, AiOutlineGithub, MdEmail } from 'react-icons/all'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

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
                lineHeight={1.33}
              >
                Flutter developer, Full-Stack Web Developer and Game Development Practitioner
              </Text>
              <Spacer />
              <HStack
                spacing={4}
              >
                <Text><b>English:</b> A2-B1</Text>
                <Text><b>Russian:</b> Native</Text>
              </HStack>
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
        <VStack
          mt={4}
          lineHeight={1.33}
          p={2}
          bg={'gray.100'}
          rounded={'md'}
        >
          <Text>
            As a highly skilled software developer with over 15 years of experience, I have a proven track record of
            success in developing and maintaining a wide range of applications. My expertise includes mobile
            application development using Flutter, backend development using Go, web development using React, and 2d-game
            development using Godot.<br /><br />
            I have experience in collaborating in small teams and have a strong understanding of industry best
            practices and performance optimization techniques. I have successfully released several mobile applications
            and 2d-games, and have provided consulting services to companies to improve the performance of their games.
          </Text>
        </VStack>
        <Grid
          templateColumns="1fr auto"
          gap={6}
          mt={4}
        >
          <GridItem>
            <VStack
              w={'100%'}
              alignItems={'start'}
            >
              <Experience />
            </VStack>
          </GridItem>
          <GridItem>
            <Skills />
          </GridItem>
        </Grid>
        <VStack>
          <Projects />
        </VStack>
      </Box>
    </Box>
  </ChakraProvider>
)
