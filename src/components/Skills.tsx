import { chakra, Divider, Flex, Grid, GridItem, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import skills from '../data/skills'
import { AiFillStar, GiStrong } from 'react-icons/all'

const Star = chakra(AiFillStar)

interface SkillProps {
  name: string;
  level: number;
  lastUsed: number;
}

function Skill(props: SkillProps) {
  return (
    <Flex
      direction={'column'}
      alignItems={'start'}
      w={'100%'}
    >
      <Text
        fontWeight={'bold'}
        fontSize={{ base: '1rem', md: '1.1rem' }}
      >
        {props.name}
      </Text>
      <HStack
        spacing={{ base: 0, md: 1 }}
        m={'0.125rem 0 0.125rem'}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            color={i < props.level ? 'gray.500' : 'gray.200'}
            fontSize={{ base: '1rem', md: '1.25rem' }}
            key={i}
          />
        ))}
      </HStack>
      <Text
        color={'gray.500'}
        fontSize={'0.66rem'}
        lineHeight={1}
        textTransform={'uppercase'}
        mt={0}
      >
        {props.lastUsed === Number.MAX_VALUE ? 'current' : `last used in ${props.lastUsed}`}
      </Text>
    </Flex>
  )
}

interface SkillsProps {
  skills?: string[];
}

export default function Skills(props: SkillsProps) {
  const display: SkillProps[] = []

  if (props.skills) {
    props.skills.forEach((skill) => {
      display.push(skills[skill as keyof typeof skills] as SkillProps)
    })
  } else {
    Object.keys(skills).forEach((skill) => {
      display.push(skills[skill as keyof typeof skills] as SkillProps)
    })
  }

  display.sort((a, b) => b.level - a.level)
    .sort((a, b) => b.lastUsed - a.lastUsed)

  return (
    <VStack
      alignItems={'start'}
    >
      <HStack
        fontSize={'1.2rem'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        pl={'0.5rem'}
      >
        <GiStrong />
        <Text>Skills</Text>
      </HStack>
      <Divider />
      <Grid
        w={'100%'}
        mt={2}
        pl={'0.5rem'}
        pr={{ base: '0', md: '2rem' }}
        gap={{ base: 3, md: 4 }}
        templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: '1fr' }}
      >
        {display.map((skill) => (
          <GridItem
            key={skill.name}
          >
            <Skill
              {...skill}
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}