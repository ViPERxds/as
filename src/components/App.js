import React, { useState } from 'react';
import VoiceRecorder from './VoiceRecorder';
import TextAnalyzer from './TextAnalyzer';

function App() {
  const [recognizedText, setRecognizedText] = useState('');

  const handleRecognizedText = (text) => {
    setRecognizedText(text);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Голосовой анализатор</h1>
        <p>Запишите свою речь и получите фонетический анализ</p>
      </header>
      <main>
        <VoiceRecorder onRecognizedText={handleRecognizedText} />
        <TextAnalyzer text={recognizedText} />
      </main>
      <footer>
        <p>Разработано для анализа русской речи, 2025</p>
      </footer>
    </div>
  );
}

export default App; 