import styled from '@emotion/styled';

export const Container = styled.div`
  width: 340px;
  height: auto;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Noto Sans KR', sans-serif;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.1s ease-in-out;
  }
`;

export const ImageContainer = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 240px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.bgImage});
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;

export const Title = styled.h3`
  color: #111;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  text-shadow: 0 0 10px #ffe29f;
"
`;

export const SubTitle = styled.p`
  color: #111;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
"
`;

export const Description = styled.p`
  width: 100%;
  font-weight: 400;
  color: #8a8a8a;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

export const Date = styled.p`
  width: 100%;
  color: #ababab;
  text-align: right;
  font-size: 14px;
  font-family: 'TheJamsil5Bold', sans-serif;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-end;
  gap: 6px;
  margin-top: 8px;
`;

export const Tag = styled.p`
  padding: 5px 10px;
  border-radius: 6px;
  background-color: #9d51fa;
  color: #fff;
  width: auto;
  font-size: 12px;
  font-weight: 600;
`;
