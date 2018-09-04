import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0%{
    opacity: 0;
  }
  10% {
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  color: ${props => props.theme.color.black};
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  transition: all ease 150ms;
  animation: ${appear} 1s ease;
  &:hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  }
`;

export const CharacterFeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #eee;
`;

export const CharacterIdentifier = styled.div`
  padding: 16px;
  text-align: left;
  > :first-child {
    font-weight: bold;
  }
  > :last-child {
    color: rgba(0, 0, 0, 0.6);
  }
`;
