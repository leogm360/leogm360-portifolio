import { useEffect, useState } from "react";

export type TSizes = {
  width: number;
  height: number;
};

export const useResize = () => {
  const [sizes, setSizes] = useState<TSizes>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!window) {
      return console.warn(
        "Window object was not found, resize hook can't be executed."
      );
    }

    if (sizes.width === 0 && sizes.height === 0) {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const handleSizes = (event: UIEvent) => {
      const window = event.currentTarget as Window;

      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSizes);

    return () => {
      window.removeEventListener("resize", handleSizes);
    };
  }, []);

  return sizes;
};
