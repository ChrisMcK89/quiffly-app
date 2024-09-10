// src/app/page.tsx

import { Box, Button, Heading, Text } from '@chakra-ui/react';
import QuizSelector from './components/QuizSelector';
import fs from 'fs';
import path from 'path';

interface QuizDetails {
  quizTitle: string;
  purpose: string;
  tagline: string;
  numberOfQuestions: number;
}

export default async function Home() {
  // Read JSON files from the 'data' directory
  const basicQuizPath = path.resolve(process.cwd(), 'src/app/data/BasicQuizData.json');
  const advancedQuizPath = path.resolve(process.cwd(), 'src/app/data/AdvancedQuizData.json');

  const basicQuiz: QuizDetails = JSON.parse(fs.readFileSync(basicQuizPath, 'utf8'));
  const advancedQuiz: QuizDetails = JSON.parse(fs.readFileSync(advancedQuizPath, 'utf8'));

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading mb={4}>Welcome to My Next.js App</Heading>
      <Text fontSize="xl" mb={6}>
        This is a simple example using Chakra UI.
      </Text>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
      <QuizSelector basicQuiz={basicQuiz} advancedQuiz={advancedQuiz} />
    </Box>
  );
}

