import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const Tab = styled.div<{ active?: boolean }>`
  padding: 16px 32px;
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  border: 2px solid ${(props) => (props.active ? "#f50" : "#fff")};
  border-radius: 14px;
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid #f50;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  margin-top: 20px;
`;
