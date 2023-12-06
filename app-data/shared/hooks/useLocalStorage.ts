import { useEffect, useState } from 'react';
import useOnlyCliet from './useOnlyClient';

export default function useLocalStorage(): Storage {
  const isClient = useOnlyCliet();
  const [localStorage, setLocalStorage] = useState<Storage>(undefined);

  useEffect(() => {
    if (isClient) {
      return;
    }

    const storage = window.localStorage;

    setLocalStorage(storage);
  }, [isClient]);

  return localStorage;
}
