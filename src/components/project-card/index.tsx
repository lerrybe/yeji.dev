import Link from 'next/link';
import * as S from './styles';
import { Project } from '@/service/projects';

type Props = { project: Project };
export default function ProjectCard({
  project: { title, subTitle, description, date, path, tags },
}: Props) {
  return (
    <S.Container>
      <S.ContentsContainer>
        <S.Date>{date}</S.Date>
        <S.Title>{`${title}`}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
        <S.Tags>
          {tags?.map((tag, index) => {
            return <S.Tag key={index}>{tag}</S.Tag>;
          })}
        </S.Tags>
      </S.ContentsContainer>

      <S.ImageContainer bgImage={`/images/projects/${path}.png`} />
    </S.Container>
  );
}
