import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: auto;
  height: 410px;
  text-align: center;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 640px) {
    margin-top: 60px;
  }
`;

export const Keywords = styled.ul`
  width: 340px;
  margin: 20px 0 20px 0;
`;

export const Keyword = styled.li<{ isActive: boolean }>`
  display: inline;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${props => (props.isActive ? '#111' : '#e8e8e8')};
  text-shadow: ${props => (props.isActive ? '0 0 20px #ffe487' : 'none')};
`;
