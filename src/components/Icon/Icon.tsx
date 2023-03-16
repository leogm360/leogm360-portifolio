import { SVGProps } from "react";

const getIcon = ({ ...svgAttributes }: SVGProps<SVGSVGElement>) => ({
  "burger-menu": (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgAttributes}
    >
      <path
        d="M5 7H19"
        stroke="#5CC4C4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12H19"
        stroke="#5CC4C4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H19"
        stroke="#5CC4C4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  close: (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgAttributes}
    >
      <path
        d="M14 6L2 18"
        stroke="#5CC4C4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6L14 18"
        stroke="#5CC4C4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
});

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: keyof ReturnType<typeof getIcon>;
}

export const Icon = ({ name, ...rest }: IIconProps) => {
  return getIcon({ ...rest })[name];
};
