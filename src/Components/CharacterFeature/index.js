import React from 'react';

import { Wrapper } from './style';

export default function CharacterFeature({ title, value, color }) {
  return (
    <Wrapper>
      <div>{title}</div>
      <div>{value}</div>
    </Wrapper>
  );
}
