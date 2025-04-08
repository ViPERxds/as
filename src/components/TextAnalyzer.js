import React, { useState, useEffect } from 'react';
import { analyzeText } from '../utils/phoneticAnalyzer';

function TextAnalyzer({ text }) {
  const [analyzedText, setAnalyzedText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (!text) {
      setAnalyzedText([]);
      return;
    }

    setLoading(true);
    
    // Анализируем текст с небольшой задержкой для имитации обработки
    const timer = setTimeout(() => {
      const result = analyzeText(text);
      setAnalyzedText(result);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  // Функция для выделения ударной гласной в слове
  const highlightStress = (word, position) => {
    if (position < 0 || position >= word.length) {
      return <span>{word}</span>;
    }

    return (
      <>
        {word.substring(0, position)}
        <span className="stressed-vowel">{word[position]}</span>
        {word.substring(position + 1)}
      </>
    );
  };

  // Функция для форматирования фонетической транскрипции
  const formatPhonetic = (phonetic) => {
    // Удаляем квадратные скобки
    const content = phonetic.substring(1, phonetic.length - 1);
    
    // Разделяем на части по ударной гласной
    const parts = content.split(/([А-ЯЁ]\')/);
    
    return (
      <>
        [
        {parts.map((part, index) => {
          // Проверяем, является ли часть ударной гласной
          if (/[А-ЯЁ]\'/.test(part)) {
            return <strong key={index} className="stressed-phonetic">{part}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
        ]
      </>
    );
  };

  // Переключение справки
  const toggleHelp = () => {
    setShowHelp(prev => !prev);
  };

  if (!text) {
    return (
      <div className="text-analyzer">
        <h2>Фонетический анализ</h2>
        <p className="empty-text">Речь не распознана. Пожалуйста, запишите что-нибудь.</p>
      </div>
    );
  }

  return (
    <div className="text-analyzer">
      <div className="analyzer-header">
        <h2>Фонетический анализ</h2>
        <button className="help-button" onClick={toggleHelp}>
          {showHelp ? 'Скрыть справку' : 'Справка'}
        </button>
      </div>
      
      {showHelp && (
        <div className="help-box">
          <h3>Что такое фонетический анализ?</h3>
          <p>Фонетический анализ показывает, как слова произносятся в устной речи.</p>
          <h4>Обозначения:</h4>
          <ul>
            <li><span className="stressed-vowel">а</span> - ударная гласная</li>
            <li><span className="stressed-phonetic">А'</span> - ударная гласная в транскрипции</li>
            <li>[аднА'] - фонетическая транскрипция слова</li>
          </ul>
          <h4>Особенности произношения:</h4>
          <ul>
            <li>Безударное "о" произносится как "а"</li>
            <li>Безударные "е", "я" чаще всего произносятся как "и"</li>
            <li>Звонкие согласные на конце слова и перед глухими оглушаются</li>
          </ul>
        </div>
      )}
      
      <div className="original-text">
        <h3>Распознанный текст:</h3>
        <p>{text}</p>
      </div>

      {loading ? (
        <div className="loading">
          <p>Выполняется анализ...</p>
        </div>
      ) : (
        <div className="analysis-results">
          <h3>Результаты анализа:</h3>
          {analyzedText.length === 0 ? (
            <p>Нет результатов для анализа.</p>
          ) : (
            <div className="words-list">
              {analyzedText.map((word, index) => (
                <div className="word-item" key={index}>
                  <div className="word-original">
                    {highlightStress(word.originalWord, word.stressPosition)}
                  </div>
                  <div className="word-phonetic">
                    {formatPhonetic(word.phonetic)}
                  </div>
                  <div className="word-stress">
                    <span>Ударение: </span>
                    {word.stressPosition > -1 ? word.stressedChar : 'Не определено'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TextAnalyzer; 