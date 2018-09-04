import React from 'react';
import CharacterCard from 'Components/CharacterCard';

import { Wrapper } from './style';

export default function CharacterList({ peoples }) {
  return (
    <Wrapper className="SomeClass">
      {peoples.map(character => (
        <CharacterCard key={character.name} {...character} />
      ))}
    </Wrapper>
  );
}
