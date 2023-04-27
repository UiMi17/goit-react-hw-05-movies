import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #0077ff;
  }
  &.active {
    font-weight: bold;
    color: #0077ff;
  }
`;
