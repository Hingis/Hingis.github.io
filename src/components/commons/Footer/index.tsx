import * as S from "./Footer.styles";
import * as T from "@styles/typography";

interface FooterProps {
  backgroundColor?: string;
}

const Footer = ({ backgroundColor }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 使用平滑滚动效果
    });
  };

  return (
    <S.FooterContainer backgroundColor={backgroundColor}>
      <S.BackToTop onClick={scrollToTop}>BACK TO TOP</S.BackToTop>
      <T.Text1 color={!backgroundColor ? "black" : "white"}>
        Hingis Chang © 2024
      </T.Text1>
    </S.FooterContainer>
  );
};

export default Footer;
