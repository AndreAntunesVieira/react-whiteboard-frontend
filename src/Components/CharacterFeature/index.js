import React from 'react';
import EyeColors from 'Components/EyeColors';

import { Wrapper } from './style';

export default function CharacterFeature({ title, value, color }) {
  return (
    <Wrapper>
      <span>{title}</span>
      {color ? <EyeColors color={color} /> : <b>{value}</b>}
    </Wrapper>
  );
}
