import { Flex, Grid, Heading, Select, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { Dynamic } from '~/lib/components/dynamic';
import { Heavy } from '~/lib/components/heavy';

const Home = () => {
  const [bodyArea, setBodyArea] = useState<'upper' | 'lower' | undefined>(
    undefined
  );
  const [type, setType] = useState<'heavy' | 'dynamic' | undefined>(undefined);
  const [confirm, setConfirm] = useState(false);
  return (
    <Flex
      direction="column"
      alignItems="center"
      minHeight="100vh"
      maxHeight="100vh"
      mb={8}
      w="full"
    >
      {!confirm ? (
        <Grid textAlign="center">
          <Heading as="h1" pb={10} size="lg">
            Select Exercise
          </Heading>
          <Select
            mb={5}
            placeholder="What are you hitting?"
            onChange={(e) => {
              setBodyArea(e.target.value as 'upper' | 'lower');
            }}
            value={bodyArea}
          >
            <option value="upper">Upper body</option>
            <option value="lower">Lower body</option>
          </Select>
          <Select
            placeholder="Speed or strength?"
            onChange={(e) => {
              setType(e.target.value as 'heavy' | 'dynamic');
            }}
            mb={5}
            value={type}
          >
            <option value="heavy">Heavy</option>
            <option value="dynamic">Dynamic</option>
          </Select>

          <Button
            isDisabled={!bodyArea || !type}
            onClick={() => setConfirm(true)}
          >
            Generate Sesh
          </Button>
        </Grid>
      ) : (
        <>
          <Box height={70}>
            <Button onClick={() => setConfirm(false)}>Edit Selection</Button>
          </Box>

          {!!bodyArea && type === 'heavy' && <Heavy type={bodyArea} />}
          {!!bodyArea && type === 'dynamic' && <Dynamic type={bodyArea} />}
        </>
      )}
    </Flex>
  );
};

export default Home;
