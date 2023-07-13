import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack, Link,
  Spacer,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import info from '../data/info'
import { AiFillLinkedin, AiOutlineGithub, MdEmail } from 'react-icons/all'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import * as React from 'react'

export function Main() {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const titleColor = useColorModeValue('gray.600', 'gray.500')
  const blockColor = useColorModeValue('gray.100', 'gray.700')
  const [isScreen] = useMediaQuery('screen')

  return <Box
    maxW="960px"
    mx="auto"
    color={textColor}
    p={{base: isScreen ? 3 : 0, lg: '1rem 0'}}
  >
    <Box
      as={'header'}
    >
      <Grid
        id={'header'}
        templateColumns={{base: '1fr', md: '1fr auto'}}
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
              color={titleColor}
              mt={0}
              lineHeight={1.33}
            >
              {info.title}
            </Text>
            <Spacer/>
            <HStack
              spacing={4}
            >
              <Text>Languages: </Text>
              {Object.entries(info.languages).map(([key, value]) => (
                <Text key={key} textTransform={'capitalize'}>
                  <b>{key}</b>{value && (<><b>:</b>{' '}{value}</>)}
                </Text>
              ))}
            </HStack>
          </Flex>
        </GridItem>
        <GridItem>
          <VStack
            alignItems={'start'}
            fontSize={{base: '1.0rem', md: '1.1rem'}}
            spacing={{base: 0, md: 1}}
            pr={{base: 0, sm: 8, lg: 0}}
          >
            {info.email && <HStack>
                <MdEmail/>
                <Text>{info.email}</Text>
            </HStack>}
            {info.github && <HStack>
                <AiOutlineGithub/>
                <Link href={`https://github.com/${info.github}`} isExternal>github.com/{info.github}</Link>
            </HStack>}
            {info.linkedin && <HStack>
                <AiFillLinkedin/>
                <Link href={`https://linkedin.com/in/${info.linkedin}`} isExternal>linkedin.com/in/{info.linkedin}</Link>
            </HStack>}
          </VStack>
        </GridItem>
      </Grid>
      <VStack
        mt={4}
        lineHeight={1.33}
        p={2}
        bg={blockColor}
        rounded={'md'}
      >
        <Text whiteSpace={'pre-wrap'}>
          {info.summary}
        </Text>
      </VStack>
      <Grid
        id={'experience'}
        templateColumns={{base: '1fr', md: '1fr auto'}}
        gap={6}
        mt={4}
      >
        <GridItem>
          <VStack
            w={'100%'}
            alignItems={'start'}
          >
            <Experience/>
          </VStack>
        </GridItem>
        <GridItem
          id={'skills'}
          order={{base: -1, md: 1}}
        >
          <Skills/>
        </GridItem>
      </Grid>
      <VStack>
        <Projects/>
      </VStack>
    </Box>
  </Box>
}