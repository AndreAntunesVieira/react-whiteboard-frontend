import React from 'react';

import { Color } from './style';

export default function EyeColors({ color }) {
  return (
    <span>
      {color.split('-').map(c => (
        <Color key={c} color={c} />
      ))}
    </span>
  );
}
