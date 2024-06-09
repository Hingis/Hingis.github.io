import * as S from "./SectionInsight.styles";
import * as T from "@styles/typography";

interface InsightProps {
  titleColor: string;
  bgColor: string;
  contentArray: {
    title: string;
    text: string;
  }[];
}

const SectionInsight = ({
  titleColor,
  bgColor,
  contentArray,
}: InsightProps) => {
  return (
    <>
      <S.InsightContainer bgColor={bgColor}>
        <S.InsightWrapper>
          <S.InsightTitle color={titleColor}>Insight</S.InsightTitle>
          {contentArray.map((content, index) => (
            <S.TextWrapper key={index}>
              <S.Heading3>{content.title}</S.Heading3>
              <T.Text1>{content.text}</T.Text1>
            </S.TextWrapper>
          ))}
        </S.InsightWrapper>
      </S.InsightContainer>
    </>
  );
};

export default SectionInsight;
