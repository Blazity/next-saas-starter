import { useCallback, useEffect } from 'react';

export interface UseEscCloseProps {
  onClose: () => void;
}

export default function useEscClose({ onClose }: UseEscCloseProps) {
  const handleUserKeyPress = useCallback(
    (event) => {
      const { keyCode } = event;
      const escapeKeyCode = 27;
      if (keyCode === escapeKeyCode) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
}
