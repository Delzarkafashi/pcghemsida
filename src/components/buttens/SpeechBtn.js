// SpeechButton.js
import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { useSpeechSynthesis } from 'react-speech-kit';

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
    <Button
      className='coach-btn'
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0em',
        height: 'fit-content',
        width: 'fit-content',
        border: '3px solid rgba(0, 0, 0, 0.2)',
        padding: '0.5rem',
        borderRadius: '10px',
        width: 'fit-content',
        lineHeight: '1.5rem',
        backgroundColor: 'rgba(22, 213, 1, 0.659)',
        color: 'black',
        outline: 'none',
        fontStyle: 'normal',
        fontSize: 'larger',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
      }}
      onClick={handleClick}
    >
      {speaking ? <StopIcon fontSize='small' /> : <PlayArrowIcon fontSize='small' />}
      {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
    </Button>
  );
};

export default SpeechButton;
