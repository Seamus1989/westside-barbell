import { Heading, Text, Box } from '@chakra-ui/react';

import { dynamic } from '../consts';

export const Dynamic = ({ type }: { type: 'upper' | 'lower' }) => {
  const data =
    type === 'upper'
      ? dynamic['Dynamic upper body']
      : dynamic['Dynamic lower body'];

  const { mainExercise } = data;
  const { secondExercise } = data;
  const specialDescription = data.specialityExercise.description;
  const randomSpeciality = data.specialityExercise.exercises
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const { completionExercises } = data;

  return (
    <Box mt={5} pb={50} pt={10}>
      <Box borderColor="white" borderRadius="6px" borderWidth={1} p={5} mt={10}>
        <Heading as="h1" size="md" textAlign="center" pb={3}>
          1. Speed Exercise
        </Heading>
        <Heading as="h3" size="sm" textAlign="center" pb={3}>
          {mainExercise}
        </Heading>
      </Box>
      {!!secondExercise && (
        <Box
          borderColor="white"
          borderRadius="6px"
          borderWidth={1}
          p={5}
          mt={10}
        >
          <Heading as="h1" size="md" textAlign="center" pb={3}>
            1. Secondary Speed Exercise
          </Heading>

          <Heading as="h3" size="sm" textAlign="center" pb={3}>
            {secondExercise}
          </Heading>
        </Box>
      )}

      <Box borderColor="white" borderRadius="6px" borderWidth={1} mt={10} p={5}>
        <Heading as="h2" size="md" textAlign="center" pb={3}>
          {specialDescription}
        </Heading>
        {randomSpeciality.map((exercise, index) => (
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
