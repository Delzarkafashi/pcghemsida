// SpeechButton.js
import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useMediaQuery } from '@mui/material';

const SpeechButton = ({ textToRead }) => {
  const { speak, speaking, cancel } = useSpeechSynthesis();

  const handleClick = () => {
    if (!speaking) {
      speak({ text: textToRead });
    } else {
      cancel();
    }
  };

  return (
    <button
      className='home-btn'
      title='Klicka här för att lysna på texten'
      onClick={handleClick}
    >
      {speaking ? <StopIcon fontSize='small' /> : <PlayArrowIcon fontSize='small' />}
      {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
    </button>
  );
};

export default SpeechButton;
