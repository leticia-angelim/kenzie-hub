import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 369px;
`;

export const LinkButton = styled(Link)`
  padding: 1rem;

  font-size: 12px;
  font-weight: 600;

  border-radius: 4px;
  background: var(--gray-3);

  transition: all 0.3s;

  &:hover {
    background: var(--gray-2);
  }
`;
