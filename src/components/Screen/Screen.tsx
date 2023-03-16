import { HTMLAttributes, PropsWithChildren } from "react";
import { Header, Footer } from "@/components";
import type { IDataAttributes } from "@/types";

export interface IScreenProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>>,
    IDataAttributes {}

export const Screen = ({ children, ...rest }: IScreenProps) => {
  return (
    <>
      <Header />
      <main {...rest}>{children}</main>
      <Footer />
    </>
  );
};
