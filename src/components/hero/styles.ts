import styled from '@emotion/styled';

export const Container = styled.section`
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
`;

export const Name = styled.h1`
  margin-top: 20px;
  color: #111;
  font-size: 32px;
  font-weight: 700;
  font-family: 'TheJamsil5Bold', sans-serif;
`;

export const Desc1 = styled.h3`
  margin-top: 12px;
  color: #111;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const Desc2 = styled.p`
  margin-top: 4px;
  color: #111;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -1px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const IconContainer = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: auto;
  cursor: pointer;

  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
  }
  &:hover {
    animation: wiggle 0.6s ease-in-out 2;
  }
`;
