import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 720px;
  min-width: 340px;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-top: 100px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DownArrowIconContainer = styled.div`
  @keyframes upAndDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  width: auto;
  height: auto;
  margin-top: 80px;
  animation: upAndDown 1s infinite;
`;
