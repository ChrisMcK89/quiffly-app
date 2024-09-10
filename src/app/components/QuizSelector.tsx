// src/components/QuizSelector.tsx
"use client";
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface QuizDetails {
  quizTitle: string;
  purpose: string;
  tagline: string;
  numberOfQuestions: number;
}

interface QuizSelectorProps {
  basicQuiz: QuizDetails;
  advancedQuiz: QuizDetails;
}

const QuizSelector = ({ basicQuiz, advancedQuiz }: QuizSelectorProps) => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizDetails | null>(null);

  const handleQuizSelection = (quizType: 'basic' | 'advanced') => {
    if (quizType === 'basic') {
      setSelectedQuiz(basicQuiz);
    } else if (quizType === 'advanced') {
      setSelectedQuiz(advancedQuiz);
    }
  };

  return (
    <Box textAlign="center" mt={8}>
      <Heading fontSize="2xl" mb={4}>Select a Quiz</Heading>

      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} justifyContent="center" gap={8}>
        {/* Basic Quiz */}
        {basicQuiz && (
          <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" width="300px">
            <Heading fontSize="xl" fontWeight="bold">{basicQuiz.quizTitle}</Heading>
            <Text mt={2}><strong>Purpose:</strong> {basicQuiz.purpose}</Text>
            <Text mt={2}><strong>Tagline:</strong> {basicQuiz.tagline}</Text>
            <Text mt={2}><strong>Number of Questions:</strong> {basicQuiz.numberOfQuestions}</Text>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={() => handleQuizSelection('basic')}
            >
              Select Basic Quiz
            </Button>
          </Box>
        )}

        {/* Advanced Quiz */}
        {advancedQuiz && (
          <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" width="300px">
            <Heading fontSize="xl" fontWeight="bold">{advancedQuiz.quizTitle}</Heading>
            <Text mt={2}><strong>Purpose:</strong> {advancedQuiz.purpose}</Text>
            <Text mt={2}><strong>Tagline:</strong> {advancedQuiz.tagline}</Text>
            <Text mt={2}><strong>Number of Questions:</strong> {advancedQuiz.numberOfQuestions}</Text>
            <Button
              mt={4}
              colorScheme="blue"
              onClick={() => handleQuizSelection('advanced')}
            >
              Select Advanced Quiz
            </Button>
          </Box>
        )}
      </Box>

      {/* Show selected quiz confirmation */}
      {selectedQuiz && (
        <Box mt={6} p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
          <Heading fontSize="xl" fontWeight="bold">You selected: {selectedQuiz.quizTitle}</Heading>
          <Text mt={2}>You will answer {selectedQuiz.numberOfQuestions} questions for this quiz.</Text>
        </Box>
      )}
    </Box>
  );
};

export default QuizSelector;
