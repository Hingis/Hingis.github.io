import Image from "next/image";
import Link from "next/link";

import * as S from "./ProjectItem.styles";

interface ItemProps {
  title: string;
  imageSrc: string;
  description?: string;
  link: string;
}

const ProjectItem = ({ title, imageSrc, link }: ItemProps) => {
  return (
    <Link href={`${link}#cover`} passHref>
      <S.ProjectItemContainer>
        <S.ImageWrapper>
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
          <S.Overlay>
            <S.OverlayText>
              <S.ProjectTitle>{title}</S.ProjectTitle>
              {/* <S.ProjectDescription>{description}</S.ProjectDescription> */}
            </S.OverlayText>
          </S.Overlay>
        </S.ImageWrapper>
      </S.ProjectItemContainer>
    </Link>
  );
};

export default ProjectItem;
