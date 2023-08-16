import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  max-width: 720px;
  min-width: 340px;
  box-sizing: border-box;
  padding: 16px 10px 0 10px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const Home = styled.h1`
  color: #111;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    transition: 0.5s ease-in-out;
    text-shadow: 0 0 20px #f7c800;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  column-gap: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const Nav = styled.span`
  color: #111;

  &:hover {
    transition: 0.5s ease-in-out;
    text-shadow: 0 0 16px #f7c800;
  }
`;
