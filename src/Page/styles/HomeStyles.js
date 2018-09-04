import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  display: flex;
  > div {
    flex-basis: calc(33% - 12px);
    margin: 8px;
  }
`;
