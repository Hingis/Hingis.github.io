import * as S from "./SectionTitle.styles";
import * as T from "@styles/typography";

interface SectionTitleProps {
  number: string;
  title: string;
  text: string;
  bgColor: string;
}

const SectionTitle = ({ number, title, text, bgColor }: SectionTitleProps) => {
  return (
    <S.TitleContainer bgColor={bgColor}>
      <S.TitleWrapper>
        <S.Number>{number}</S.Number>
        <T.Heading2>{title}</T.Heading2>
        <T.Text1 textAlign="center">{text}</T.Text1>
      </S.TitleWrapper>
    </S.TitleContainer>
  );
};

export default SectionTitle;
