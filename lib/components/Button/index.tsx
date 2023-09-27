import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <StyledButton type="button">{text}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
`;
