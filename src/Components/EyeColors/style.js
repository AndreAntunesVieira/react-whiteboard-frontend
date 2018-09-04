import styled from 'styled-components';

export const Color = styled.span`
  background-color: ${props => props.color};
  border-radius: 50px;
  height: 10px;
  width: 10px;
  display: inline-block;
  margin: 0 4px;
`;
