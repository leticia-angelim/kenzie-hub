import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 2rem;
`;

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 72px;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 90vw;
  height: 118px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray-1);
  }
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 37px;
  padding: 0 20%;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Line = styled.div`
  height: 1px;

  background: var(--gray-3);
`;
