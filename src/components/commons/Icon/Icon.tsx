import * as heroiconsOutline from "@styled-icons/heroicons-outline";
import * as Materialicon from "@styled-icons/material";
import { IconName } from "./Icon.types";

import * as S from "./Icon.styles";

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  onClick?: () => void;
}
const Icon = ({ name, size, color, onClick }: IconProps) => {
  const sharedProps = {
    width: size,
    color: color,
    onClick: onClick,
  };

  switch (name) {
    case "Menu":
      return (
        <S.IconWrapper>
          <heroiconsOutline.Bars2 {...sharedProps} />
        </S.IconWrapper>
      );
    case "Headphone":
      return (
        <S.IconWrapper>
          <Materialicon.Headphones {...sharedProps} />
        </S.IconWrapper>
      );
    case "Message":
      return (
        <S.IconWrapper>
          <Materialicon.Message {...sharedProps} />
        </S.IconWrapper>
      );
    case "Emoji":
      return (
        <S.IconWrapper>
          <Materialicon.EmojiEmotions {...sharedProps} />
        </S.IconWrapper>
      );
  }
};

export default Icon;
