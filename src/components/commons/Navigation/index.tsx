import { useState } from "react";
import Icon from "../Icon";

import * as S from "./Navigation.styles";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.NavBar>
      <S.IconWrapper>
        <Icon name="Menu" size={40} onClick={toggleMenu} />
      </S.IconWrapper>

      <S.Menu $isOpen={isOpen}>
        <S.MenuItem href="/">Home</S.MenuItem>
        <S.MenuItem href="/about">About</S.MenuItem>
        <S.MenuItem href="/#project">Works</S.MenuItem>
        {/* <S.MenuItem href="/contact">Contact</S.MenuItem> */}
      </S.Menu>
    </S.NavBar>
  );
};

export default Navigation;
