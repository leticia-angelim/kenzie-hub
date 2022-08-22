import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  flex-direction: column;

  padding: 4rem 0;
`;

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  width: 100%;
  padding: 4rem 2rem;

  border-radius: 4px;
  background: var(--gray-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    text-align: center;
    margin-top: 1rem;

    color: var(--gray-1);
  }

  h6 {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;

    color: var(--gray-1);
  }

  @media (min-width: 450px) {
    width: 369px;
  }
`;

export const InputBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 1rem;
  }

  input,
  select {
    height: 48px;
    margin-bottom: 0.5rem;
    padding-left: 16px;

    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    border-radius: 4px;
    background: var(--gray-2);
    border: 1px solid var(--gray-2);
  }

  input::placeholder {
    color: var(--gray-1);
  }

  input:focus {
    border: 1px solid var(--gray-1);
  }

  input:focus::placeholder {
    color: var(--gray-0);
  }

  input:disabled {
    cursor: not-allowed;
  }

  svg {
    position: absolute;
    top: 40px;
    right: 20px;

    color: var(--gray-1);

    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 10px;
    color: var(--negative);
  }
`;

export const PinkButton = styled.button`
  width: 100%;
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
`;

export const GrayButton = styled(Link)`
  width: 100%;
  height: 48px;
  padding-top: 1.3rem;

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
`;
