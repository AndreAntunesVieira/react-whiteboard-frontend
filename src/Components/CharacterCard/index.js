import React from 'react';
import CharacterFeature from 'Components/CharacterFeature/index';

import { Wrapper, CharacterFeatureWrapper, CharacterIdentifier } from './style';

export default function CharacterCard({
  name,
  gender,
  birth_year,
  eye_color,
  height,
  mass,
  hair_color,
  skin_color,
}) {
  return (
    <Wrapper>
      <CharacterIdentifier>
        <div>{name}</div>
        <div>{gender}</div>
      </CharacterIdentifier>
      <CharacterFeatureWrapper>
        <CharacterFeature title="YOB" value={birth_year} />
        <CharacterFeature title="Eye Color" color={eye_color} />
        <CharacterFeature title="Height" value={height} />
        <CharacterFeature title="Mass" value={mass} />
        <CharacterFeature title="Hair" value={hair_color} />
        <CharacterFeature title="Skin" value={skin_color} />
      </CharacterFeatureWrapper>
    </Wrapper>
  );
}
