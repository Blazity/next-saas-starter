import { useCallback, useEffect } from 'react';

export interface UseEscCloseProps {
  onClose: () => void;
}

export default function useEscClose({ onClose }: UseEscCloseProps) {
  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { code } = event;
      if (code === "Escape") {
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
