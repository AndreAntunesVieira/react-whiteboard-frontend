import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.color.red};
`;

const CharacterFeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { Wrapper, CharacterFeatureWrapper };
