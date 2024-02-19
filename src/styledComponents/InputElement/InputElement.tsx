import styled from 'styled-components';

export const InputElement = styled.input`
  color: white;
  
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 10px;
  background-color: transparent;
  border-bottom: 1px solid #e8e8e8;

  &:valid {
    border-color: ${({ theme }) => theme.colors.mainColor};
  }

  &:invalid {
    border-color: ${({ theme }) => theme.colors.errorColor};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.additionColor};
    outline: none;
  }
`;
