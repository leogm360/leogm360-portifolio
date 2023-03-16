import { useEffect, useState } from "react";

export const useDelayUnmount = (isMounted: boolean, delay: number) => {
  const [shouldMount, setShouldMount] = useState<boolean>(false);

  useEffect(() => {
    let mounting: NodeJS.Timeout;

    if (isMounted && !shouldMount) {
      setShouldMount(true);
    }

    if (!isMounted && shouldMount) {
      mounting = setTimeout(() => setShouldMount(false), delay);
    }

    return () => clearTimeout(mounting);
  }, [isMounted, delay, shouldMount]);

  return shouldMount;
};
