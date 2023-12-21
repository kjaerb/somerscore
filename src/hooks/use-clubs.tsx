import { useEffect, useState } from "react";

export function useClubs() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  return { isLoading };
}
