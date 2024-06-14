import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const PurposeContainer = styled.div`
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1cd760;
  border-radius: 20px;
  gap: 8px;
`;

// Survey Question
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  ${mediaQueryDown("md")`
		flex-direction: column;
	`}
`;

export const QuestionCategoryWrapper = styled.div`
  min-width: 360px;
  width: 360px;
  max-width: 360px;
  background-color: #1cd760;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  ${mediaQueryDown("lg")`
		min-width: 240px;
		max-width: 240px;
		width: 240px;
	`}

  ${mediaQueryDown("md")`
		min-width: auto;
		max-width: 100%;
		width: auto;
		padding: 20px;
		gap: 8px;
	`}
`;

export const QuestionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Survey Result
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
  gap: 12px;
  justify-content: space-between;

  ${mediaQueryDown("md")`
		flex-wrap: wrap;
		width: 100%;
	`}
`;

// User Feedback
export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 20px 0px;
`;

export const FeedbackWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  ${mediaQueryDown("md")`
		flex-direction: column;
	`}
`;

export const FeedbackWrapperReverse = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  ${mediaQueryDown("md")`
		flex-direction: column-reverse;
	`}
`;

export const UserWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
`;

export const FeedbackTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeedbackTextWrapper = styled.div`
  padding: 12px 24px;
  border: 2px solid #1cd760;
  border-radius: 16px;
  color: #005f20;
  font-weight: 600;
`;
