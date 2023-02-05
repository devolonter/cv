import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
  VStack,
  ChakraProvider,
  theme, Stack,
} from '@chakra-ui/react'
import { AiFillLinkedin, AiOutlineGithub, MdEmail } from 'react-icons/all'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import info from './data/info'

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
          templateColumns={{ base: '1fr', md: '1fr auto' }}
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
                {info.full_name}
              </Text>
              <Text
                color={'gray.600'}
                mt={0}
                lineHeight={1.33}
              >
                {info.title}
              </Text>
              <Spacer />
              <HStack
                spacing={4}
              >
                {Object.entries(info.languages).map(([key, value]) => (
                  <Text key={key} textTransform={'capitalize'}><b>{key}:</b> {value}</Text>
                ))}
              </HStack>
            </Flex>
          </GridItem>
          <GridItem>
            <VStack
              alignItems={'start'}
              fontSize={{ base: '1.0rem', md: '1.2rem' }}
              spacing={{ base: 0, md: 2 }}
            >
              {info.email && <HStack>
                <MdEmail />
                <Text>{info.email}</Text>
              </HStack>}
              {info.github && <HStack>
                <AiOutlineGithub/>
                <Text>github.com/{info.github}</Text>
              </HStack>}
              {info.linkedin && <HStack>
                <AiFillLinkedin/>
                <Text>linkedin.com/in/{info.linkedin}</Text>
              </HStack>}
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
          <Text whiteSpace={'pre-wrap'}>
            {info.summary}
          </Text>
        </VStack>
        <Grid
          templateColumns={{ base: '1fr', md: '1fr auto' }}
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
          <GridItem
            order={{ base: -1, md: 1 }}
          >
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
