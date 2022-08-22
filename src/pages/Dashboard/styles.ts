import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 95vw;
  padding: 0 1rem;

  @media (min-width: 353px) {
    padding: 0 15%;
  }
`;

export const Navbar = styled.header`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 72px;
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
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

  @media (min-width: 563px) {
    gap: 2rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Main = styled.section`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 28px 0;

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
    }

    button {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      padding: 0.4rem 1rem;

      border: none;
      border-radius: 4px;

      background: var(--gray-3);

      &:hover {
        background: var(--gray-2);
      }
    }
  }

  .tech-list {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    margin-bottom: 2rem;
    padding: 2rem;

    border-radius: 4px;
    background: var(--gray-3);

    div {
      display: flex;
      justify-content: space-between;

      padding: 1.2rem;

      border-radius: 4px;
      background: var(--gray-4);

      cursor: pointer;

      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
      }

      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--gray-1);
      }

      &:hover {
        background: var(--gray-2);

        span {
          color: var(--gray-0);
        }
      }
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 7rem;
  left: 0px;

  width: 100vw;
  height: 1px;

  background: var(--gray-3);
`;

export const Line2 = styled.div`
  position: absolute;
  top: 19rem;
  left: 0px;

  width: 100vw;
  height: 1px;

  background: var(--gray-3);
`;

export const Loading = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  flex-direction: column;

  margin: 20rem;
`;
