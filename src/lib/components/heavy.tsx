import { Heading, Text, Box } from '@chakra-ui/react';

import { heavy } from '../consts';

export const Heavy = ({ type }: { type: 'upper' | 'lower' }) => {
  const data =
    type === 'upper' ? heavy['Heavy upper body'] : heavy['Heavy lower body'];
  const { description } = data.mainExercise;
  const randomMain =
    data.mainExercise.exercises[
      Math.floor(Math.random() * data.mainExercise.exercises.length)
    ];

  const threeRandomSecondary = data.specialityExercise.exercises
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const secondaryDescription = data.specialityExercise.description;
  const { completionExercises } = data;
  return (
    <Box mt={5} pb={50} pt={10}>
      <Box borderColor="white" borderRadius="6px" borderWidth={1} p={5} mt={10}>
        <Heading as="h1" size="md" textAlign="center" pb={3}>
          1. {randomMain.name}
        </Heading>
        <Heading as="h3" size="sm" textAlign="center" pb={3}>
          {description}
        </Heading>
        <Heading as="h3" size="sm" textAlign="center" pb={3}>
          {randomMain.note}
        </Heading>
      </Box>
      <Box borderColor="white" borderRadius="6px" borderWidth={1} mt={10} p={5}>
        <Heading as="h2" size="md" textAlign="center" pb={3}>
          {secondaryDescription}
        </Heading>
        {threeRandomSecondary.map((exercise, index) => (
          <Box pb={4}>
            <Heading as="h3" size="sm">
              {index + 1}. {exercise.name}
            </Heading>
            <Text as="h4" size="sm" pl={10}>
              {exercise.note}
            </Text>
          </Box>
        ))}
      </Box>
      <Box
        borderColor="white"
        borderRadius="6px"
        borderWidth={1}
        mt={10}
        mb={40}
        p={5}
      >
        <Heading as="h1" size="md" textAlign="center" pb={3}>
          Finish off with some of these:
        </Heading>
        {completionExercises.map((exercise, index) => (
          <Heading as="h3" size="xsm" pb={3}>
            {index + 1}. {exercise}
          </Heading>
        ))}
      </Box>
    </Box>
  );
};
