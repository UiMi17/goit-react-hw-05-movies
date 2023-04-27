import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  
`

export const StyledTrendingElement = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #0077ff;
  }
`;
