import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  width: 200px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0066cc;
  }
`;
