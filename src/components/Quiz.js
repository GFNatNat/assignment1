import React, { useState } from "react";
import { Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Typography, Box } from "@mui/material";
// import "../styles/Quiz.css";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is ReactJS?",
      options: ["A JavaScript library for building user interfaces", "A programming language", "A database management system"],
      answer: "A JavaScript library for building user interfaces"
    },
    {
      id: 2,
      question: "What is JSX?",
      options: ["A programming language", "A file format", "A syntax extension for JavaScript"],
      answer: "A syntax extension for JavaScript"
    },
    {
      id: 3,
      question: "Which hook is used to optimize performance by memoizing values?",
      options: ["useMemo", "useState", "useEffect", "useCallback"],
      answer: "useMemo"
    }
  ];

  const handleChange = (event, questionId) => {
    setAnswers({ ...answers, [questionId]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>React Hooks Quiz</Typography>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <Box key={q.id} mb={2}>
            <FormControl component="fieldset">
              <FormLabel>{q.question}</FormLabel>
              <RadioGroup value={answers[q.id] || ""} onChange={(e) => handleChange(e, q.id)}>
                {q.options.map((option) => (
                  <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
      {score !== null && <Typography variant="h5">Your Score: {score} / {questions.length}</Typography>}
    </Container>
  );
};

export default Quiz;