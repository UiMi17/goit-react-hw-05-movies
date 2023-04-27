import { StyledHeader, StyledLink, StyledNav } from './StyledLayout';

const Layout = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='movies'>Movies</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Layout;
