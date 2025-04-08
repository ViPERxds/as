import React, { useState, useEffect, useRef } from 'react';

function VoiceRecorder({ onRecognizedText }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [error, setError] = useState('');
  const [interimResult, setInterimResult] = useState('');
  const silenceTimeoutRef = useRef(null);
  const lastSpeechRef = useRef(Date.now());
  const silenceTimerIntervalRef = useRef(null);

  useEffect(() => {
    // Проверка поддержки Web Speech API
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Ваш браузер не поддерживает распознавание речи. Пожалуйста, используйте Chrome или Edge.');
      return;
    }

    // Инициализация объекта распознавания речи
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    
    // Настройка параметров
    recognitionInstance.lang = 'ru-RU';
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    
    // Обработчики событий
    recognitionInstance.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      
      if (finalTranscript) {
        onRecognizedText(finalTranscript);
      }
      
      setInterimResult(interimTranscript);
      
      // Обновляем время последней речи
      lastSpeechRef.current = Date.now();
    };
    
    recognitionInstance.onerror = (event) => {
      setError(`Ошибка распознавания: ${event.error}`);
      setIsRecording(false);
      clearSilenceDetection();
    };
    
    recognitionInstance.onend = () => {
      if (isRecording) {
        // Если запись была остановлена не пользователем, перезапускаем ее
        try {
          recognitionInstance.start();
        } catch (e) {
          console.error('Ошибка при перезапуске распознавания:', e);
        }
      }
    };
    
    recognitionInstance.onspeechend = () => {
      // Когда речь заканчивается, проверяем паузу
      lastSpeechRef.current = Date.now();
    };
    
    setRecognition(recognitionInstance);
    
    // Очистка при размонтировании компонента
    return () => {
      if (recognitionInstance) {
        try {
          recognitionInstance.stop();
        } catch (e) {
          console.error('Ошибка при остановке распознавания:', e);
        }
      }
      
      clearSilenceDetection();
    };
  }, [onRecognizedText, isRecording]);

  // Настраиваем интервал проверки тишины, когда запись активна
  useEffect(() => {
    if (isRecording) {
      setupSilenceDetection();
    } else {
      clearSilenceDetection();
    }

    return () => {
      clearSilenceDetection();
    };
  }, [isRecording]);
  
  // Функция для очистки всех таймеров обнаружения тишины
  const clearSilenceDetection = () => {
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }
    if (silenceTimerIntervalRef.current) {
      clearInterval(silenceTimerIntervalRef.current);
      silenceTimerIntervalRef.current = null;
    }
  };
  
  // Функция для настройки обнаружения тишины
  const setupSilenceDetection = () => {
    // Очищаем предыдущие таймеры
    clearSilenceDetection();
    
    // Устанавливаем интервал, который регулярно проверяет время последней речи
    silenceTimerIntervalRef.current = setInterval(() => {
      const timeSinceLastSpeech = Date.now() - lastSpeechRef.current;
      
      // Если прошло более 2 секунд с момента последней речи, останавливаем запись
      if (timeSinceLastSpeech > 2000 && isRecording) {
        console.log('Обнаружена пауза в речи, останавливаем запись');
        stopRecording();
      }
    }, 500); // Проверяем каждые 500 мс
  };

  const toggleRecording = () => {
    if (!recognition) return;
    
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  
  const startRecording = () => {
    setError('');
    try {
      recognition.start();
      setIsRecording(true);
      lastSpeechRef.current = Date.now();
      setupSilenceDetection();
    } catch (e) {
      setError(`Ошибка при запуске записи: ${e.message}`);
      console.error('Ошибка при запуске записи:', e);
    }
  };
  
  const stopRecording = () => {
    if (recognition) {
      try {
        recognition.stop();
      } catch (e) {
        console.error('Ошибка при остановке записи:', e);
      }
      setIsRecording(false);
      setInterimResult('');
      clearSilenceDetection();
    }
  };

  return (
    <div className="voice-recorder">
      <h2>Запись голоса</h2>
      
      <button 
        className={`record-button ${isRecording ? 'recording' : ''}`}
        onClick={toggleRecording}
        disabled={!recognition}
      >
        {isRecording ? 'Остановить запись' : 'Начать запись'}
      </button>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="interim-result">
        {isRecording && (
          <p className="recording-info">
            Говорите... Запись автоматически остановится через 2 секунды тишины
          </p>
        )}
        {interimResult && (
          <>
            <h3>Текущее распознавание:</h3>
            <p>{interimResult}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default VoiceRecorder; 