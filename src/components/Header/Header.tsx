import { lazy, Suspense } from "react";
import Image from "next/image";
import { useResize } from "@/hooks";
import headerLogo from "@/assets/img/header-logo.svg";

const WIDTH_BREAKPOINT = 1024;

const LazyMobileHeader = lazy(() => import("./MobileHeader"));
const LazyDesktopHeader = lazy(() => import("./DesktopHeader"));

export const Header = () => {
  const { width } = useResize();

  return (
    <header className="flex justify-between items-center bg-transparent px-4 py-7">
      <div className="w-52 h-6">
        <Image
          className="w-full h-full"
          src={headerLogo}
          alt="Desenvolvedor Leonardo Moraes"
          priority
        />
      </div>
      <div className="flex items-center">
        <Suspense>
          {width < WIDTH_BREAKPOINT ? (
            <LazyMobileHeader />
          ) : (
            <LazyDesktopHeader />
          )}
        </Suspense>
      </div>
    </header>
  );
};
