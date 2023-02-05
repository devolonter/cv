import { HStack, VStack, Text, Divider, Grid, GridItem, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { FaUserAstronaut } from 'react-icons/all'
import projects from '../data/projects'

export default function Projects() {
  const projectEvenBgColor = useColorModeValue('gray.100', 'gray.700')
  const projectOddBgColor = useColorModeValue('gray.50', 'gray.800')
  const roleColor = useColorModeValue('gray.600', 'gray.400')
  const [isScreen] = useMediaQuery('screen')

  return (
    <>
      <HStack
        fontSize="1.2rem"
        fontWeight="bold"
        textTransform={'uppercase'}
        pt={4}
      >
        <FaUserAstronaut />
        <Text>Latest Projects</Text>
      </HStack>
      <Divider />
      <Grid
        id={'projects'}
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
        w={'100%'}
        gap={3}
      >
        {projects.map((project, index) => (
          <GridItem
            key={index}
            p={3}
            fontSize={'0.9rem'}
            bg={{
              base: isScreen ?
                (index % 2 === 0 ? projectEvenBgColor : projectOddBgColor) :
                index % 3 === 0 || index % 4 === 0 ? projectEvenBgColor : projectOddBgColor,
              md: index % 3 === 0 || index % 4 === 0 ? projectEvenBgColor : projectOddBgColor
            }}
            rounded={'md'}
          >
            <VStack
              alignItems={'start'}
              spacing={1}
            >
              <Text
                fontWeight={'bold'}
              >
                {project.name}
              </Text>
              <Text
                color={'gray.500'}
                lineHeight={0.5}
                fontSize={'0.8rem'}
              >
                {project.date}
              </Text>
              <Text
                pt={1.5}
                lineHeight={1.33}
              >
                {project.description}
              </Text>
              <Text
                color={roleColor}
                fontWeight={'bold'}
                lineHeight={1.33}
              >
                <b>Role: </b>{project.role}
              </Text>
              <Text
                color={'gray.500'}
                lineHeight={1.33}
              >
                <b>Technologies: </b>{project.technologies.join(', ')}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}