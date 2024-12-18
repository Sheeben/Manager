import { useState, useCallback } from 'react';
import { Status } from '@react-google-maps/api';

export function useGoogleMaps() {
  const [loadError, setLoadError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback((error: Error) => {
    setLoadError(error);
  }, []);

  return {
    isLoaded,
    loadError,
    handleLoad,
    handleError
  };
}