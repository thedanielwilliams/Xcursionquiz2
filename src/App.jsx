import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizGame from './components/QuizGame';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'finished'
  const [finalScore, setFinalScore] = useState(0);

  const handleStart = () => {
    setGameState('playing');
  };

  const handleFinish = (score) => {
    setFinalScore(score);
    setGameState('finished');
  };

  const handleRestart = () => {
    setFinalScore(0);
    setGameState('start');
  };

  return (
    <div className="antialiased text-gray-900">
      {gameState === 'start' && <LandingPage onStart={handleStart} />}
      {gameState === 'playing' && <QuizGame onFinish={handleFinish} />}
      {gameState === 'finished' && (
        <ResultScreen
          score={finalScore}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
