import { ReactNode, useState } from "react";
import * as S from "./Tabs.styles";

interface TabsProps {
  tabs: {
    title: string;
    content: ReactNode;
  }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <S.TabsContainer>
      <S.TabWrapper>
        {tabs.map((tab, index) => (
          <S.Tab
            key={index}
            onClick={() => handleTabClick(index)}
            active={activeTab === index}
          >
            {tab.title}
          </S.Tab>
        ))}
      </S.TabWrapper>

      <S.TabContent>{tabs[activeTab].content}</S.TabContent>
    </S.TabsContainer>
  );
};

export default Tabs;
