import * as heroiconsOutline from "@styled-icons/heroicons-outline";
import { IconName } from "./Icon.types";

export interface IconProps {
  name: IconName;
  size?: number;
  onClick?: () => void;
}

const Icon = ({ name, size, onClick }: IconProps) => {
  const sharedProps = {
    width: size,
  };

  switch (name) {
    case "Menu":
      return <heroiconsOutline.Bars2 onClick={onClick} {...sharedProps} />;
  }
};

export default Icon;
