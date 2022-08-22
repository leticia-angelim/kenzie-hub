import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  width: 95%;

  border-radius: 4px;
  background: var(--gray-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  form {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    padding: 2rem;

    .buttons {
      display: flex;
      gap: 22px;
    }

    .disabled-button {
      width: 204px;
      height: 48px;

      font-weight: 500;
      font-size: 16px;

      border-radius: 4px;
      background: var(--color-primary-negative);
      border: 1px solid var(---color-primary-negative);

      cursor: default;
    }

    .pink-button {
      width: 204px;
      height: 48px;

      font-weight: 500;
      font-size: 16px;

      border-radius: 4px;
      background: var(--color-primary);
      border: 1px solid var(--color-primary);

      transition: all 0.3s;

      &:hover {
        background-color: var(--color-primary-focus);
        border: 1px solid var(--color-primary-focus);
      }
    }

    .gray-button {
      width: 98px;
      height: 48px;

      font-weight: 500;
      font-size: 16px;
      text-align: center;

      border-radius: 4px;
      background: var(--gray-1);
      border: 1px solid var(--gray-1);

      transition: all 0.3s;

      &:hover {
        background-color: var(--gray-2);
        border: 1px solid var(--gray-2);
      }
    }
  }

  @media (min-width: 380px) {
    width: 369px;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50px;
  padding: 0 2rem;

  background: var(--gray-2);
  border-radius: 4px 4px 0px 0px;

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  button {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    border: none;

    color: var(--gray-1);
    background: inherit;
  }
`;
