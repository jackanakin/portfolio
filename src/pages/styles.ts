import styled from "styled-components";

export const Background = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.a`
  margin: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

export const HeaderDescription = styled.p`
  color: white;
`;

export const HeaderTitle = styled.h5`
  color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;