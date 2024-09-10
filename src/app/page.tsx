import { Box, Button, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading mb={4}>Welcome to My Next.js App</Heading>
      <Text fontSize="xl" mb={6}>
        This is a simple example using Chakra UI.
      </Text>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
    </Box>
  );
}
